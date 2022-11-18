from .timer import timer
from .algorithm import AlgorithmInterface
from .ctru_utils import *

class CTRU(AlgorithmInterface):
	def __init__(self, n, q, q2, eta, *args, **kwargs):
		"""constructor function that uses the specified algorithm parameters, example configurations can be found in Table 2"""
		self.n = n
		self.q = q
		self.q2 = q2
		self.eta = eta

		self.R = get_ring_modulus(self.n)

	def _polynom_encode(self, p, l):
		"""the polynom encoder described in section 4.1, Algorithm 7; it encodes a larger polynom into one formed of points from an E8 lattice scaled with a factor of l"""
		coef = p.all_coeffs()
		if len(coef) < self.n//2:
			coef = [0 for i in range((self.n//2) - len(coef))] + coef

		v = []
		for i in range(int(self.n//8)):
			ki = Matrix([[ coef[4*i+k] for k in range(4) ]])
			vi = list(encode_E8(ki, l))
			v += vi

		return Poly(v, x)

	def _polynom_decode(self, p, l):
		"""the polynom decoder described in section 4.1, Algorithm 8; it decodes a larger polynom from one represented as points in an E8 lattice scaled with a factor of l"""
		coef = p.all_coeffs()
		if len(coef) < self.n:
			coef = [0 for i in range((self.n) - len(coef))] + coef

		m = []
		for i in range(int(self.n//8)):
			ki = Matrix([[ coef[8*i+k] for k in range(8) ]])
			mi = list(decode_E8(ki, l))
			m += mi

		return Poly(m, x)

	@timer(algorithm = "CTRU", function_name = "generate_keys")
	def generate_keys(self, *args, **kwargs):
		pass

	@timer(algorithm = "CTRU", function_name = "generate_public_key")
	def generate_public_key(self, *args, **kwargs):
		pass

	@timer(algorithm = "CTRU", function_name = "encrypt")
	def encrypt(self, *args, **kwargs):
		pass

	@timer(algorithm = "CTRU", function_name = "decrypt")
	def decrypt(self, *args, **kwargs):
		pass
