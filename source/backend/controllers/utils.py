import logging
import grpc
from controllers.v1_pb2 import AuthToken as ProtoAuthToken
from models.auth_token import AuthToken
from functools import wraps

logging.basicConfig(
	filename="logs",
	filemode='a',
	format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
	datefmt='%H:%M:%S',
	level=logging.DEBUG
)


def require_auth(error_response):
	def specialized_decorator_build(function):
		@wraps(function)
		def wrapper(service, request, context):
			logger = logging.getLogger("Auth Error")
			token = request if isinstance(request, ProtoAuthToken) else request.token
			print(token)
			if not AuthToken.fromProto(token).isValid():
				context.set_code(grpc.StatusCode.PERMISSION_DENIED)
				context.set_details("You need to be authenticated first!")
				logger.info("Invalid token used for user "+token.userId)
				return error_response()

			return function(service, request, context)
		return wrapper
	return specialized_decorator_build

def catch_error(error_response):
	def specialized_decorator_build(function):
		@wraps(function)
		def wrapper(service, request, context):
			logger = logging.getLogger("Error catcher")
			try:
				return function(service, request, context)
			except Exception as e:
				context.set_code(grpc.StatusCode.UNKNOWN)
				context.set_details("Unknown except raised")
				logger.error("Unknown except raised "+str(e))
				print(e)
				return error_response()
		return wrapper
	return specialized_decorator_build