#!/bin/bash

python -m grpc_tools.protoc \
	   -I resources \
	   --python_out=source/backend/controllers/ \
	   --grpc_python_out=source/backend/controllers \
	   resources/v1.proto

docker run \
    -v `pwd`:/work \
    jfbrandhorst/grpc-web-generators \
    protoc \
    	-I /work/resources \
        --js_out=import_style=commonjs:/work/source/webapp/src/apidocs \
        --grpc-web_out=import_style=commonjs,mode=grpcwebtext:/work/source/webapp/src/apidocs \
        /work/resources/v1.proto