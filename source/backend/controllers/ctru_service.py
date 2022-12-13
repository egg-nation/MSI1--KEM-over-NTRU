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
	def keygen(self, request, context):
		token = AuthToken.fromProto(request.token)
		if not token.isValid():
			context.set_code(grpc.StatusCode.PERMISSION_DENIED)
			context.set_details("You need to be authenticated first!")
			return CTRUKeygenResult()
		alg = CTRU(request.parameters.n, request.parameters.q, request.parameters.q2, request.parameters.eta)
		alg.Keygen()
		print(PolynomtoBytes(alg.pk))
		print(alg.sk)
		print(alg.z)
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



	def getKeys(self, request, context):
		token = AuthToken.fromProto(request)
		if not token.isValid():
			context.set_code(grpc.StatusCode.PERMISSION_DENIED)
			context.set_details("You need to be authenticated first!")
			return CTRUKeys()

		for key in keys_DB.find({"userId":token.userId}):
			yield CTRUKeys(
					keyId = str(key["_id"]),
					parameters = CTRUParameters(**key["parameters"]),
					pk = key["pk"],
					sk = key["sk"]
				)

	def addKeys(self, request, context):
		token = AuthToken.fromProto(request.token)
		if not token.isValid():
			context.set_code(grpc.StatusCode.PERMISSION_DENIED)
			context.set_details("You need to be authenticated first!")
			return CTRUKeys()

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

	def runEncaps(self, request, context):
		token = AuthToken.fromProto(request.token)
		if not token.isValid():
			context.set_code(grpc.StatusCode.PERMISSION_DENIED)
			context.set_details("You need to be authenticated first!")
			return Entry()

		alg = CTRU(request.keys.parameters.n, request.keys.parameters.q, request.keys.parameters.q2, request.keys.parameters.eta)
		alg.pk = Poly(DerSequence().decode(b64decode(request.keys.pk)), x)
		alg.sk, alg.z = [ Poly(DerSequence().decode(b64decode(b)), x) for b in request.keys.sk.split(";") ]

		for i in range(request.iterations):
			alg.Encapsulate()
			entry_info = list(gather())[0]
			entry = Entry.from_execution(entry_info, token.userId, request.keys.keyId)
			entry.id = str(entries_DB.insert_one(entry.toMongo()).inserted_id)
			yield entry.toProto()

	def runDecaps(self, request, context):
		"""Missing associated documentation comment in .proto file."""
		context.set_code(grpc.StatusCode.UNIMPLEMENTED)
		context.set_details('Method not implemented!')
		raise NotImplementedError('Method not implemented!')