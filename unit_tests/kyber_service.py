import sys
sys.path.insert(1, "../source/backend")
sys.path.insert(1, "../source/backend/controllers")

import grpc
import controllers.v1_pb2
import controllers.v1_pb2_grpc
from os import urandom

def test_kyber():
	token = None
	with grpc.insecure_channel("127.0.0.1:5000") as channel:
		user_stub = controllers.v1_pb2_grpc.UserServiceStub(channel)
		password = urandom(10).hex()
		register_creds = controllers.v1_pb2.RegisterCredentials(username = "kegen_tester", emailAddress = "kegen_tester@test.com", password = password)

		token = user_stub.register(register_creds).token

	entries = None
	with grpc.insecure_channel("127.0.0.1:5000") as channel:
		stub = controllers.v1_pb2_grpc.KYBERServiceStub(channel)
		params = controllers.v1_pb2.KYBERParameters(
			n = 256,
			q = 3329,
			eta = 2,
			k = 2,
			du = 10,
			dv = 4
		)

		keygen_result = stub.keygen(controllers.v1_pb2.KYBERKeygenParameters(token = token, parameters = params))

		assert keygen_result.keys.keyId != ""
		assert keygen_result.entry.id != ""
		assert keygen_result.keys.keyId in [ key.keyId for key in stub.getKeys(token).keys]
		entries = list(stub.runEncaps(controllers.v1_pb2.KYBERExecution(
				keys = keygen_result.keys,
				token = token,
				iterations = 3
			)).entries)
		assert len(entries) > 0

		for entry in entries:
			print(list(stub.runDecaps(controllers.v1_pb2.KYBERExecution(
				keys = keygen_result.keys,
				token = token,
				iterations = 3,
				data = entry.output
			)).entries))

	with grpc.insecure_channel("127.0.0.1:5000") as channel:
		stub = controllers.v1_pb2_grpc.EntryServiceStub(channel)
		for entry in entries:
			assert entry == stub.getById(controllers.v1_pb2.EntryID(
					token = token,
					entryId = entry.id
				))

		for entry in list(stub.getEntryHistory(token).entries):
			assert entry.id == stub.deleteEntry(controllers.v1_pb2.EntryID(
					token = token,
					entryId = entry.id
				)).entryId

	with grpc.insecure_channel("127.0.0.1:5000") as channel:
		user_stub = controllers.v1_pb2_grpc.UserServiceStub(channel)
		user_stub.delete(token)

test_kyber()