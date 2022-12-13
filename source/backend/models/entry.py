from typing import Optional
from pydantic import BaseModel
import controllers.v1_pb2 as messages

class Entry(BaseModel):
	id : Optional[str]
	userId : str
	algorithmName : str
	functionName : str
	inputParameters : dict
	keyId : str
	executionTime : int


	@classmethod
	def from_mongo(cls, obj):
		return Entry(
				id = str(obj["_id"]),
				userId = str(obj["userId"]),
				algorithmName = obj["algorithmName"],
				functionName = obj["functionName"],
				inputParameters = obj["inputParameters"],
				keyId = obj["keyId"],
				executionTime = obj["executionTime"],
			)

	@classmethod
	def from_execution(cls, obj, userId, keyId):
		return Entry(
				userId = str(userId),
				algorithmName = obj["algorithm"],
				functionName = obj["function_name"],
				inputParameters = {},
				keyId = str(keyId),
				executionTime = obj["end"] - obj["start"],
			)

	def toProto(self):
		return messages.Entry(**dict(self))

	def toMongo(self):
		obj = dict(self)
		del obj["id"]
		return obj