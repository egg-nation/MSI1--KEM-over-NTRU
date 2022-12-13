import sys
sys.path.insert(1, "../source/backend")
sys.path.insert(1, "../source/backend/controllers")

import grpc
import controllers.v1_pb2
import controllers.v1_pb2_grpc
from os import urandom
from time import time

def test_login():
	with grpc.insecure_channel("localhost:5000") as channel:
		stub = controllers.v1_pb2_grpc.UserServiceStub(channel)
		try:
			stub.login(controllers.v1_pb2.LoginCredentials(username = "test", password = urandom(10).hex()))
			assert False
		except:
			assert True

def test_register():
	with grpc.insecure_channel("localhost:5000") as channel:
		stub = controllers.v1_pb2_grpc.UserServiceStub(channel)
		password = urandom(10).hex()
		login_creds = controllers.v1_pb2.LoginCredentials(username = "test", password = password)
		register_creds = controllers.v1_pb2.RegisterCredentials(username = "test", emailAddress = "test@test.com", password = password)
		token = stub.register(register_creds).token
		
		assert token.expiresAt - int(time()*1000) > 3600*1000
		assert stub.login(login_creds).username == "test"
		assert stub.delete(token).username == ""
