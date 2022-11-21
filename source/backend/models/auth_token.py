from pydantic import BaseModel
from typing import Optional
from config import SIGNATURE_KEY
from time import time
from hmac import compare_digest, digest
import controllers.v1_pb2 as messages

class AuthToken(BaseModel):
	userId : str
	generatedAt : int
	expiresAt : int
	signature : Optional[bytes]

	def getData(self):
		return (self.userId+"::"+str(self.generatedAt)+"::"+str(self.expiresAt)).encode('utf-8')

	def isValid(self):
		runtime = int(time()*1000)
		if runtime < self.generatedAt or runtime >= self.expiresAt:
			return False

		return compare_digest(self.signature, digest(SIGNATURE_KEY, self.getData(), digest = 'sha512'))

	def generateSignature(self):
		self.signature = digest(SIGNATURE_KEY, self.getData(), digest = 'sha512')

	def toProto(self):
		return messages.AuthToken(**dict(self))

	@classmethod
	def fromProto(cls, token):
		return cls(
				userId = token.userId,
				generatedAt = token.generatedAt,
				expiresAt = token.expiresAt,
				signature = token.signature
			)