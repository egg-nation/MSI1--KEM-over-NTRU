FROM python:3.11-slim-buster

WORKDIR /work

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
CMD [ "python3", "main.py" ]