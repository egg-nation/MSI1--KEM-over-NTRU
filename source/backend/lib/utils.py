from sympy.abc import x
from sympy import Poly, Matrix, GF, Matrix, oo, sqrt, invert, NotInvertible
from random import randint

def mod(X, m):
	"""modulo operation extended to negative numbers and sympy structures"""
	if isinstance(X, Matrix):
		return X.applyfunc(lambda x: mod(x, m))

	if isinstance(X, Poly):
		return Poly(list(Matrix(X.all_coeffs()).applyfunc(lambda y: mod(y, m))), x)

	while X < 0:
		X += m

	return X % m

def argmin(*args, key = None):
	if len(args) == 1:
		args = args[0]
	else:
		args = list(args)

	m = min(args, key = key)
	return args.index(m)

_round = round
def round(p):
	"""rounding operation extended for polynomials"""
	if isinstance(p, Poly):
		return Poly(list(Matrix(p.all_coeffs()).applyfunc(_round)), x)

	return _round(p)

def sample_binary_space(size):
	p = randint(0, (2**size) - 1)
	return Poly([ (p >> i) & 1 for i in range(size) ], x)

def BytestoPolynom(b):
	n = 0
	coeffs = []
	for i in b[::-1]:
		n = (n << 8) + i

	while n > 0:
		coeffs.append(n & 1)
		n >>= 1

	return Poly(coeffs[::-1], x)

def PolynomtoBytes(p):
	b = []
	n = 0
	c = p.all_coeffs()
	for i in c:
		n = (n << 1) | i

	while n > 0:
		b.append(n % 256)
		n = n//256

	return bytes(b)