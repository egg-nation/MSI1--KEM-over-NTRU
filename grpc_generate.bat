python -m grpc_tools.protoc ^
	   -I resources ^
	   --python_out=source/backend/controllers/ ^
	   --grpc_python_out=source/backend/controllers/ ^
	   resources/v1.proto
