import numpy as np
import grpc
from base64 import b64decode, b64encode
from lib.utils import BytestoPolynom, PolynomtoBytes, Poly, x
from lib.kyber import Kyber
from lib.timer import gather
from config import MONGODB_URL
from v1_pb2 import KYBERKeygenResult, KYBERKeys, KYBERKey, Entry, KYBERParameters, Entries
from v1_pb2_grpc import KYBERServiceServicer
from pymongo import MongoClient
from models.user import AuthToken
from models.entry import Entry
from bson import ObjectId
from Crypto.Util.asn1 import DerSequence
from controllers.utils import require_auth, catch_error

entries_DB = MongoClient(MONGODB_URL).KEM.entries
keys_DB = MongoClient(MONGODB_URL).KEM.KYBER_keys

def export_key(alg):
	key = {
		"parameters": {
			"n":alg.n,
			"q":alg.q,
			"eta":alg.eta,
			"k": alg.k,
			"du":alg.du,
			"dv":alg.dv
		},
		"pk": [],
		"sk": []
	}

	t, rho = alg.pk
	for p in t:
		key["pk"].append(b64encode(DerSequence(p.all_coeffs()).encode()).decode('utf-8'))
	key["pk"] .append(b64encode(rho).decode('utf-8'))
	key["pk"] = ";".join(key["pk"])

	skp, _, h, z = alg.sk
	for p in skp:
		key["sk"].append(b64encode(DerSequence(p.all_coeffs()).encode()).decode('utf-8'))
	key["sk"].append(b64encode(h).decode('utf-8'))
	key["sk"].append(b64encode(z).decode('utf-8'))

	key["sk"] = ";".join(key["sk"])

	return key

def import_poly_array(arr):
	return np.array([ Poly(DerSequence().decode(b64decode(p)), x) for p in arr ])

def import_key(alg, keys):
	pk = keys.pk.split(';')
	t = import_poly_array(pk[:-1])
	rho = b64decode(pk[-1])
	alg.pk = (t, rho)

	sk = keys.sk.split(';')
	skp = import_poly_array(sk[:-2])
	h = b64decode(sk[-2])
	z = b64decode(sk[-1])
	alg.sk = (skp, alg.pk, h, z)

def export_poly_array(arr):
	return ";".join([b64encode(DerSequence(p.all_coeffs()).encode()).decode('utf-8') for p in arr])



class KYBERService(KYBERServiceServicer):
	@require_auth(KYBERKeygenResult)
	@catch_error(KYBERKeygenResult)
	def keygen(self, request, context):
		token = AuthToken.fromProto(request.token)
		alg = Kyber(request.parameters.n, request.parameters.q, request.parameters.eta, request.parameters.k, request.parameters.du, request.parameters.dv)
		alg.Keygen()
		
		
		key = export_key(alg)
		key_id = str(keys_DB.insert_one({"userId":token.userId, **key}).inserted_id)

		entry_info = list(gather())[0]
		entry = Entry.from_execution(entry_info, token.userId, key_id)
		entry.id = str(entries_DB.insert_one(entry.toMongo()).inserted_id)

		return KYBERKeygenResult(
			keys = KYBERKey(
					keyId = key_id,
					parameters = KYBERParameters(**key["parameters"]),
					pk = key["pk"],
					sk = key["sk"]
				),
			entry = entry.toProto()
		)


	@require_auth(KYBERKeys)
	@catch_error(KYBERKeys)
	def getKeys(self, request, context):
		token = AuthToken.fromProto(request)
		return KYBERKeys(keys = [
				KYBERKey(
					keyId = str(key["_id"]),
					parameters = KYBERParameters(**key["parameters"]),
					pk = key["pk"],
					sk = key["sk"]
				)
				for key in keys_DB.find({"userId":token.userId})
			])

	@require_auth(KYBERKey)
	@catch_error(KYBERKey)
	def addKeys(self, request, context):
		token = AuthToken.fromProto(request.token)
		key = {
			"parameters": {
				"n": request.keys.parameters.n,
				"q": request.keys.parameters.q,
				"eta": request.keys.parameters.eta,
				"du": request.keys.parameters.du,
				"dv": request.keys.parameters.dv
			},
			"pk": request.keys.pk,
			"sk": request.keys.sk,
			"userId":token.userId
		}

		key_id = str(keys_DB.insert_one(key).inserted_id)
		return KYBERKey(
					keyId = key_id,
					parameters = KYBERParameters(**key["parameters"]),
					pk = key["pk"],
					sk = key["sk"]
				)

	@require_auth(Entries)
	@catch_error(Entries)
	def runEncaps(self, request, context):
		token = AuthToken.fromProto(request.token)
		alg = Kyber(request.keys.parameters.n, request.keys.parameters.q, request.keys.parameters.eta, request.keys.parameters.k, request.keys.parameters.du, request.keys.parameters.dv)
		import_key(alg, request.keys)

		entries = []
		for i in range(request.iterations):
			c, _ = alg.Encapsulate()
			u, v = c
			entry_info = list(gather())[0]
			entry = Entry.from_execution(entry_info, token.userId, request.keys.keyId)

			entry.output = export_poly_array(u)+";"+b64encode(DerSequence(v.item().all_coeffs()).encode()).decode('utf-8')
			entry.id = str(entries_DB.insert_one(entry.toMongo()).inserted_id)
			entries.append(entry.toProto())
		return Entries(entries = entries)

	@require_auth(Entries)
	@catch_error(Entries)
	def runDecaps(self, request, context):
		token = AuthToken.fromProto(request.token)
		alg = Kyber(request.keys.parameters.n, request.keys.parameters.q, request.keys.parameters.eta, request.keys.parameters.k, request.keys.parameters.du, request.keys.parameters.dv)
		import_key(alg, request.keys)

		u = import_poly_array(request.data.split(";")[:-1])
		v = np.array(Poly(DerSequence().decode(b64decode(request.data.split(";")[-1])), x))
		
		entries = []
		for i in range(request.iterations):
			alg.Decapsulate((u, v))
			entry_info = list(gather())[0]
			entry = Entry.from_execution(entry_info, token.userId, request.keys.keyId)
			entry.inputParameters = {
				"c": request.data
			}
			entry.id = str(entries_DB.insert_one(entry.toMongo()).inserted_id)
			entries.append(entry.toProto())
		return Entries(entries = entries)