import grpc
from config import MONGODB_URL
from v1_pb2 import Entry as ProtoEntry, EntryID, Entries
from v1_pb2_grpc import EntryServiceServicer
from pymongo import MongoClient
from models.user import AuthToken
from models.entry import Entry
from bson import ObjectId
from controllers.utils import catch_error, require_auth

DB = MongoClient(MONGODB_URL).KEM.entries

class EntryService(EntryServiceServicer):
	@require_auth(ProtoEntry)
	@catch_error(ProtoEntry)
	def getById(self, request, context):
		token = AuthToken.fromProto(request.token) 
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

	@require_auth(Entries)
	@catch_error(Entries)
	def getEntryHistory(self, request, context):
		token = AuthToken.fromProto(request)
		entries = [Entry.from_mongo(mongo_entry).toProto() for mongo_entry in DB.find({"userId": token.userId})]
		return Entries(entries = entries)

	@require_auth(EntryID)
	@catch_error(EntryID)
	def deleteEntry(self, request, context):
		token = AuthToken.fromProto(request.token) 
		DB.delete_one({"_id":ObjectId(request.entryId), "userId":token.userId})
		return request