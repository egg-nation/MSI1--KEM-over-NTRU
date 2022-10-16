class AlgorithmInterface(object):
	def __init__(self, *args, **kwargs):
		raise NotImplemented

	def generate_keys(self, *args, **kwargs):
		raise NotImplemented

	def generate_public_key(self, *args, **kwargs):
		raise NotImplemented

	def encrypt(self, *args, **kwargs):
		raise NotImplemented

	def decrypt(self, *args, **kwargs):
		raise NotImplemented