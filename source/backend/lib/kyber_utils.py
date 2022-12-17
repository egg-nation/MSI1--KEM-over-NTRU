import numpy as np
from .utils import *
from hashlib import sha3_512, shake_128, shake_256, sha3_256
from os import urandom

def Compress(X, d, q):
	def _c(X):
		m = 2**d
		c = m / q
		coeff = []
		for i in X.all_coeffs():
			ci = c * i
			ci = round(ci)
			ci = mod(ci, m)
			coeff.append(ci)

		return Poly(coeff, x)
	cv = np.vectorize(_c)
	return cv(X)

def Decompress(X, d, q):
	def _d(X):
		r = q / (2**d)
		coeff = []
		for i in X.all_coeffs():
			coeff.append(round(r * i))
		return Poly(coeff, x)

	dv = np.vectorize(_d)
	return dv(X)

def Encode(B, l):
	def _e(p):
		if not isinstance(p, Poly):
			return p

		beta = 0
		f = p.all_coeffs()

		if len(f) < 256:
			f = [0 for i in range(256 - len(f))] + f

		f = f[::-1]

		for i in range(256):
			for j in range(l):
				b = (f[i] >> j) & 1
				beta += b << ((i * l) + j)
		return IntToBytes(beta)

	return b"".join([ _e(p) for p in flatten(B) ])

def G(b):
	hash = sha3_512(b).digest()
	return hash[:32], hash[32:]

def H(p):
	return sha3_256(Encode(p, 1)).digest()

def KDF(B, bitsize = 256):
	return shake_256(B).digest(bitsize // 8)

