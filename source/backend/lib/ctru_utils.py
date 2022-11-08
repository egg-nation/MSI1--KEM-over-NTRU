from .utils import *

def get_ring_modulus(n):
	"""the ring polynomial modulus as described in chapter 2.1"""
	return Poly((x ** n) - (x ** (n//2)) + 1, x)

def ext_mod(X, m):
	"""extended modulo operation as defined in chapter 2.1, section \"Modular reductions\""""
	if isinstance(X, Poly):
		return Poly(list(Matrix(X.all_coeffs()).applyfunc(lambda y: ext_mod(y, m))), x)
	return mod(X, m) - (m/2)


def norm(X, m):
	"""the norm as defined in chapter 2.1, section \"Sizes of elements\""""
	if isinstance(X, Matrix):
		return sqrt(sum( [ norm(i, m) ** 2 for i in list(X) ] ))
	return abs(ext_mod(X, m))
