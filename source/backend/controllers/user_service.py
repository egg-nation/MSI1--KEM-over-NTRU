import grpc
from config import MONGODB_URL
from v1_pb2 import User as ProtoUser
from v1_pb2_grpc import UserServiceServicer
from pymongo import MongoClient
from models.user import User, AuthToken
from bcrypt import hashpw, gensalt
from bson import ObjectId
from controllers.utils import catch_error, require_auth

DB = MongoClient(MONGODB_URL).KEM.users

class UserService(UserServiceServicer):
	@catch_error(ProtoUser)
	def login(self, request, context):
		db_user = DB.find_one({"username":request.username})
		if db_user is None:
			context.set_code(grpc.StatusCode.NOT_FOUND)
			context.set_details("The user was not found!")
			return ProtoUser()

		user = User.from_mongo(db_user)
		if not user.check_password(request.password):
			context.set_code(grpc.StatusCode.PERMISSION_DENIED)
			context.set_details("The password is incorrect!")
			return ProtoUser()

		return user.toProto()

	@catch_error(ProtoUser)
	def register(self, request, context):
		if not DB.find_one({ "$or": [{ "username":request.username}, {"email":request.emailAddress } ]}) is None:
			context.set_code(grpc.StatusCode.ALREADY_EXISTS)
			context.set_details("The username or enamil already exists!")
			return ProtoUser()

		DB.insert_one({
			"username": request.username,
			"email": request.emailAddress,
			"password_hash": hashpw(request.password.encode('utf-8'), gensalt()).decode('utf-8')
		})

		return self.login(request, context)


	@require_auth(ProtoUser)
	@catch_error(ProtoUser)
	def delete(self, request, context):
		DB.delete_one({"_id":ObjectId(request.userId)})
		return ProtoUser(userId = "", username = "", emailAddress = "")