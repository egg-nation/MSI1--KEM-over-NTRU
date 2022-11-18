python -m grpc_tools.protoc ^
	   -I resources ^
	   --python_out=source/backend/controllers/ ^
	   --grpc_python_out=source/backend/controllers ^
	   --js_out=import_style=commonjs:source/frontend/apilib ^
	   --grpc-web_out=import_style=commonjs,mode=grpcwebtext:source/frontend/apilib ^
	   resources/v1.proto
