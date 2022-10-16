from .timer import timer
from .algorithm import AlgorithmInterface

class NTRUEncrypt(AlgorithmInterface):
	def __init__(self, *args, **kwargs):
		raise NotImplemented

	@timer(algorithm = "NTRUEncrypt", function_name = "generate_keys")
	def generate_keys(self, *args, **kwargs):
		raise NotImplemented

	@timer(algorithm = "NTRUEncrypt", function_name = "generate_public_key")
	def generate_public_key(self, *args, **kwargs):
		raise NotImplemented

	@timer(algorithm = "NTRUEncrypt", function_name = "encrypt")
	def encrypt(self, *args, **kwargs):
		raise NotImplemented

	@timer(algorithm = "NTRUEncrypt", function_name = "decrypt")
	def decrypt(self, *args, **kwargs):
		raise NotImplemented
