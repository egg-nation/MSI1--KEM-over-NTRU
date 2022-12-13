from .utils import *
from random import randint

### general maths section ###

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


### encoding speccific functions ###

#### these are encoding parameters defind in chapter 3.1
H = Matrix([
	[1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 1, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1],
	[0, 1, 0, 1, 0, 1, 0, 1]
])

c = Matrix([[0, 1, 0, 1, 0, 1, 0, 1]])

def encode_E8(k, l):
	"""encoding algorithm described in section 3.1, Algorithm 1, here, k needs to be encoded and l is the scaling factor"""
	return (l * mod(k * H, 2))


def decode_C(X, l):
	"""CVP solver described in section 3.1, Algorithm 3"""
	mind = oo
	mini = 0
	TotalCost = 0
	k = []

	for i in range(4):
		c = [
			norm(X[2*i], 2*l)**2 + norm(X[2*i+1], 2*l)**2,
			norm(X[2*i] - l, 2*l)**2 + norm(X[2*i+1] - l, 2*l)**2
		]

		ki = argmin(c)
		TotalCost += c[ki]

		if c[1-ki] - c[ki] < mind:
			mind =  c[1-ki] - c[ki]
			mini = i

		k.append(ki)

	if sum(k) % 2 == 1:
		k[mini] = 1 - k[mini]
		TotalCost += mind

	return k, TotalCost

def decode_E8(X, l):
	"""decoding algorithm described in section 3.1, Algorithm 2, here, X needs to be decoded and l is the scaling factor"""
	arr = [
		decode_C(X, l),
		decode_C(X - (l*c), l)
	]

	b = argmin(arr, key = lambda x: x[1])

	k0, k1, k2, k3 = arr[b][0]

	return Matrix([[k0, k1 ^ k0, k3, b]])

def random_polynom(max_degree, eta):
	"""random sampling of the polynom space as described in section 2, Sets and Distributions"""
	def cbdist():
		a = Matrix([[ randint(0, 1) for i in range(eta) ]])
		b = Matrix([[ randint(0, 1) for i in range(eta) ]])
		return sum(list(a-b))
	
	return Poly([ cbdist() for i in range(max_degree) ], x)