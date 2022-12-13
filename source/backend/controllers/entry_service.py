import grpc
from config import MONGODB_URL
from v1_pb2 import Entry as ProtoEntry
from v1_pb2_grpc import EntryServiceServicer
from pymongo import MongoClient
from models.user import AuthToken
from models.entry import Entry
from bson import ObjectId

DB = MongoClient(MONGODB_URL).KEM.entries

class EntryService(EntryServiceServicer):
	def getById(self, request, context):
		token = AuthToken.fromProto(request.token) 
		if not token.isValid():
			context.set_code(grpc.StatusCode.PERMISSION_DENIED)
			context.set_details("You need to be authenticated first!")
			return ProtoEntry()

		mongo_entry = DB.find_one({"_id":ObjectId(request.entryId)})
		if mongo_entry is None:
			context.set_code(grpc.StatusCode.NOT_FOUND)
			context.set_details("No entry was found!")
			return ProtoEntry()

		entry = Entry.from_mongo(mongo_entry)
		if entry.userId != token.userId:
			context.set_code(grpc.StatusCode.PERMISSION_DENIED)
			context.set_details("You don't have permission to access this entry!")
			return ProtoEntry()

		return entry.toProto()

	def getEntryHistory(self, request, context):
		token = AuthToken.fromProto(request) 
		if not token.isValid():
			context.set_code(grpc.StatusCode.PERMISSION_DENIED)
			context.set_details("You need to be authenticated first!")
			return ProtoEntry()

		for mongo_entry in DB.find({"userId": token.userId}):
			yield Entry.from_mongo(mongo_entry).toProto()

	def deleteEntry(self, request, context):
		token = AuthToken.fromProto(request.token) 
		if not token.isValid():
			context.set_code(grpc.StatusCode.PERMISSION_DENIED)
			context.set_details("You need to be authenticated first!")
			return ProtoEntry()

		DB.delete_one({"_id":request.entryId, "userId":token.userId})
		return request