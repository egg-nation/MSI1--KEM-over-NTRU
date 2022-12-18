import grpc
from base64 import b64decode, b64encode
from lib.utils import BytestoPolynom, PolynomtoBytes, Poly, x
from lib.ctru import CTRU
from lib.timer import gather
from config import MONGODB_URL
from v1_pb2 import CTRUKeygenResult, CTRUKeys, Entry, CTRUParameters
from v1_pb2_grpc import CTRUServiceServicer
from pymongo import MongoClient
from models.user import AuthToken
from models.entry import Entry
from bson import ObjectId
from Crypto.Util.asn1 import DerSequence
from controllers.utils import require_auth, catch_error

entries_DB = MongoClient(MONGODB_URL).KEM.entries
keys_DB = MongoClient(MONGODB_URL).KEM.CTRU_keys

def export_key(alg):
	return {
		"parameters": {
			"n":alg.n,
			"q":alg.q,
			"q2":alg.q2,
			"eta":alg.eta
		},
		"pk": b64encode(DerSequence(alg.pk.all_coeffs()).encode()).decode('utf-8'),
		"sk": b64encode(DerSequence(alg.sk.all_coeffs()).encode()).decode('utf-8')+";"+b64encode(DerSequence(alg.z.all_coeffs()).encode()).decode('utf-8')
	}

class CTRUService(CTRUServiceServicer):
	@require_auth(CTRUKeygenResult)
	@catch_error(CTRUKeygenResult)
	def keygen(self, request, context):
		token = AuthToken.fromProto(request.token)
		alg = CTRU(request.parameters.n, request.parameters.q, request.parameters.q2, request.parameters.eta)
		alg.Keygen()
		
		key = export_key(alg)
		key_id = str(keys_DB.insert_one({"userId":token.userId, **key}).inserted_id)

		entry_info = list(gather())[0]
		entry = Entry.from_execution(entry_info, token.userId, key_id)
		entry.id = str(entries_DB.insert_one(entry.toMongo()).inserted_id)

		return CTRUKeygenResult(
			keys = CTRUKeys(
					keyId = key_id,
					parameters = CTRUParameters(**key["parameters"]),
					pk = key["pk"],
					sk = key["sk"]
				),
			entry = entry.toProto()
		)


	@require_auth(CTRUKeys)
	@catch_error(CTRUKeys)
	def getKeys(self, request, context):
		token = AuthToken.fromProto(request)
		for key in keys_DB.find({"userId":token.userId}):
			yield CTRUKeys(
					keyId = str(key["_id"]),
					parameters = CTRUParameters(**key["parameters"]),
					pk = key["pk"],
					sk = key["sk"]
				)

	@require_auth(CTRUKeys)
	@catch_error(CTRUKeys)
	def addKeys(self, request, context):
		token = AuthToken.fromProto(request.token)
		key = {
			"parameters": {
				"n": request.keys.parameters.n,
				"q": request.keys.parameters.q,
				"q2": request.keys.parameters.q2,
				"eta": request.keys.parameters.eta
			},
			"pk": request.keys.pk,
			"sk": request.keys.sk,
			"userId":token.userId
		}

		key_id = str(keys_DB.insert_one(key).inserted_id)
		return CTRUKeys(
					keyId = key_id,
					parameters = CTRUParameters(**key["parameters"]),
					pk = key["pk"],
					sk = key["sk"]
				)

	@require_auth(Entry)
	@catch_error(Entry)
	def runEncaps(self, request, context):
		token = AuthToken.fromProto(request.token)
		alg = CTRU(request.keys.parameters.n, request.keys.parameters.q, request.keys.parameters.q2, request.keys.parameters.eta)
		alg.pk = Poly(DerSequence().decode(b64decode(request.keys.pk)), x)
		alg.sk, alg.z = [ Poly(DerSequence().decode(b64decode(b)), x) for b in request.keys.sk.split(";") ]

		for i in range(request.iterations):
			c, _ = alg.Encapsulate()
			entry_info = list(gather())[0]
			entry = Entry.from_execution(entry_info, token.userId, request.keys.keyId)
			entry.output = b64encode(DerSequence(c.all_coeffs()).encode()).decode('utf-8')
			entry.id = str(entries_DB.insert_one(entry.toMongo()).inserted_id)
			yield entry.toProto()

	@require_auth(Entry)
	@catch_error(Entry)
	def runDecaps(self, request, context):
		token = AuthToken.fromProto(request.token)
		alg = CTRU(request.keys.parameters.n, request.keys.parameters.q, request.keys.parameters.q2, request.keys.parameters.eta)
		alg.pk = Poly(DerSequence().decode(b64decode(request.keys.pk)), x)
		alg.sk, alg.z = [ Poly(DerSequence().decode(b64decode(b)), x) for b in request.keys.sk.split(";") ]

		c = Poly(DerSequence().decode(b64decode(request.data)), x)

		for i in range(request.iterations):
			entry_info = list(gather())[0]
			entry = Entry.from_execution(entry_info, token.userId, request.keys.keyId)
			entry.inputParameters = {
				"c": request.data
			}
			entry.id = str(entries_DB.insert_one(entry.toMongo()).inserted_id)
			yield entry.toProto()