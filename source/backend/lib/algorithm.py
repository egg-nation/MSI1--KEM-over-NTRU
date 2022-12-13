class AlgorithmInterface(object):
	def __init__(self, *args, **kwargs):
		raise NotImplemented

	def Keygen(self, *args, **kwargs):
		raise NotImplemented

	def Encapsulate(self, *args, **kwargs):
		raise NotImplemented

	def Decapsulate(self, *args, **kwargs):
		raise NotImplemented