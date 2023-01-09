#./grpc_generate.sh

docker image rm kem-backend
cd source/backend
docker build . -t kem-backend:latest
cd ../../

docker image rm kem-frontend
cd source/webapp
docker build . -t kem-frontend:latest
cd ../../


docker volume create kem-backend-db
docker-compose up -d