from sympy.abc import x
from sympy import Poly, Matrix

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

