from typing import Optional
from pydantic import BaseModel
from .auth_token import AuthToken
from bcrypt import checkpw, hashpw
from time import time
from config import MAX_SESSION_TIME
import controllers.v1_pb2 as messages

class User(BaseModel):
	userId : str
	name : str
	email : str
	password_hash : str
	token : Optional[AuthToken]


	@classmethod
	def from_mongo(cls, obj):
		return User(
				userId = str(obj["_id"]),
				name = obj["username"],
				email = obj["email"],
				password_hash = obj["password_hash"]
			)

	def check_password(self, password):
		if not checkpw(password.encode('utf-8'), self.password_hash.encode('utf-8')):
			return False

		runtime = int(time()*1000)
		self.token = AuthToken(userId = self.userId, generatedAt = runtime, expiresAt = runtime + (MAX_SESSION_TIME * 1000))
		self.token.generateSignature()
		return True

	def toProto(self):
		obj = dict(self)
		
		obj["token"] = obj["token"].toProto()
		obj["username"] = obj["name"]
		obj["emailAddress"] = obj["email"]
		
		del obj["name"]
		del obj["email"]
		del obj["password_hash"]

		return messages.User(**obj)

