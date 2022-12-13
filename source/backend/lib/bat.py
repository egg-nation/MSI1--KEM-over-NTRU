from .timer import timer
from .algorithm import AlgorithmInterface

class BAT(AlgorithmInterface):
	def __init__(self, *args, **kwargs):
		pass

	@timer(algorithm = "BAT", function_name = "Keygen")
	def Keygen(self, *args, **kwargs):
		pass

	@timer(algorithm = "BAT", function_name = "Encapsulate")
	def Encapsulate(self, *args, **kwargs):
		pass

	@timer(algorithm = "BAT", function_name = "Decapsulate")
	def Decapsulate(self, *args, **kwargs):
		pass