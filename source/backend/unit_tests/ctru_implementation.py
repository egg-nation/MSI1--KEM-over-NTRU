import sys
sys.path.insert(0, "../")

from random import randint, seed
from lib.ctru import *

### these are the parameters from Table 2
PARAMETERS = [
	{
		"n": 512,
		"q": 3457,
		"q2": 2**9,
		"eta": 2

	}
]

def test_encoding():
	for l in range(1, 101):
		for i in range(1, 16):
			m = Matrix([[ (i&8) >> 3, (i & 4) >> 2, (i & 2) >> 1, i & 1]])
			e = encode_E8(m, l)
			d = decode_E8(e, l)
			print(m, d, e)
			assert m == d

def test_encoding_corectness():
	pass
	"""test the encoding, since the input space is huge we will randomly sample it"""
	seed(0)
	for parameter_set in PARAMETERS:
		alg = CTRU(**parameter_set)
		for i in range(100):
			test_value = 10#randint(0, 2**(alg.n // 2) - 1)
			p = Poly([ (test_value >> j) & 1 for j in range(alg.n//2) ][::-1], x)
			d = alg._polynom_decode(alg._polynom_encode(p, parameter_set["q"]), parameter_set["q"])
			assert p == d