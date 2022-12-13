import sys
sys.path.insert(1, "controllers")

from concurrent.futures import ThreadPoolExecutor
from controllers.user_service import UserService
from controllers.entry_service import EntryService
from controllers.ctru_service import CTRUService
import grpc
import controllers.v1_pb2_grpc as ApiSpec

def main():
	server = grpc.server(ThreadPoolExecutor(max_workers = 16))

	ApiSpec.add_UserServiceServicer_to_server(UserService(), server)
	ApiSpec.add_EntryServiceServicer_to_server(EntryService(), server)
	ApiSpec.add_BATServiceServicer_to_server(ApiSpec.BATServiceServicer(), server)
	ApiSpec.add_CTRUServiceServicer_to_server(CTRUService(), server)

	server.add_insecure_port("[::]:5000")
	server.start()
	print("Server is running")
	server.wait_for_termination()


if __name__ == "__main__":
	main()