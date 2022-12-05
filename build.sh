#!/bin/bash

#./grpc_generate.sh

docker image rm kem-backend -f
cd source/backend
docker build . -t kem-backend:latest
cd ../../

docker image rm kem-webapp -f
cd source/webapp
docker build . -t kem-webapp:latest
cd ../../

docker volume create kem-backend-db
docker-compose up -d