from lib.timer import timer
from lib.algorithm import AlgorithmInterface
from lib.kyber_utils import *

class Kyber(AlgorithmInterface):
	def __init__(self, n, q, eta, k, du, dv, *args, **kwargs):
		self.n = n
		self.q = q
		self.eta = eta
		self.k = k
		self.du = du
		self.dv = dv

		self.R = Poly(x**self.n + 1)

		self.RE = lambda X: (X%self.R).set_domain(GF(self.q, symmetric=False))
		self.REv = np.vectorize(self.RE)

		self.pk = None
		self.sk = None

	def _XOF(self, rho, i, j):
		return shake_128(rho + bytes([i, j])).digest(3 * self.n)

	def _PRF(self, sigma, N):
		return shake_256(sigma + bytes([N])).digest(64 * self.eta)

	def _Parse(self, B):
		i = 0
		j = 0

		a = [0 for k in range(self.n)]

		while j < self.n:
			d1 = B[i] + 256 * mod(B[i+1], 16)
			d2 = floor(B[i+1] / 16) + 16 * B[i + 2]

			c = 0
			if d1 < self.q:
				a[j] = d1
				j += 1
				c += 1

			if d2 < self.q and j < self.n:
				a[j] = d2
				j += 1
				c += 2

			i += 3

		return self.RE(Poly(a[::-1], x))

	def _BytesToPoly(self, B):
		return self.RE(Poly([b for b in B], x))

	def _CBD(self, B):
		beta = BytesToInt(B)
		f = []
		for i in range(256):
			a = sum([ (beta >> (2 * i * self.eta + j)) & 1 for j in range(self.n) ])
			b = sum([ (beta >> (2 * i * self.eta + self.eta + j)) & 1 for j in range(self.n) ])
			f.append(a - b)
		return self.RE(Poly(f[::-1], x))

	def _Decode(self, B, l):
		beta = BytesToInt(B)
		f = []
		for i in range(256):
			z = 0
			for j in range(l):
				z += ((beta >> ((i * l) + j)) & 1) << j
			f.append(z)

		return self.RE(Poly(f[::-1], x))

	def _generate_vector(self, sigma, N):
		f = []
		for i in range(self.k):
			f.append(self._CBD(self._PRF(sigma, N)))
			N += 1

		f = np.array(f)

		return f, N

	def _CPAPKE_KeyGen(self):
		d = urandom(32)
		rho, sigma = G(d)

		A = []
		N = 0
		for i in range(self.k):
			A.append([])
			for j in range(self.k):
				A[i].append(self._Parse(self._XOF(rho, i, j)))

		A = np.array(A)

		s, N = self._generate_vector(sigma, N)

		e, N = self._generate_vector(sigma, N)

		t = self.REv(np.matmul(A, s)+e)

		pk = (t, rho)
		sk = s
		return pk, sk

	def _CPAPKE_Enc(self, pk, m, coins):
		t, rho = pk

		A = []
		N = 0
		for i in range(self.k):
			A.append([])
			for j in range(self.k):
				A[i].append(self._Parse(self._XOF(rho, i, j)))

		A = np.array(A)	

		r, N = self._generate_vector(coins, N)

		e1, N = self._generate_vector(coins, N)

		e2 = self._CBD(self._PRF(coins, N))

		u = self.REv(np.matmul(A.T, r) + e1)
		if type(m) == bytes:
			v = self.REv(np.matmul(t, r) + e2 + Decompress(self._Decode(m, 1), 1, self.q))
		else:
			v = self.REv(np.matmul(t, r) + e2 + Decompress(m, 1, self.q))
		return (u, v)

	def _CPAPKE_Dec(self, sk, c):
		u, v = c

		M = Compress(self.REv(v - np.matmul(sk.T, u)), 1, self.q)
		return M.item()

	@timer(algorithm = "Kyber", function_name = "Keygen")
	def Keygen(self, *args, **kwargs):
		z = urandom(32)
		self.pk, skp = self._CPAPKE_KeyGen()
		self.sk = (skp, self.pk, H(self.pk), z)

	@timer(algorithm = "Kyber", function_name = "Encapsulate")
	def Encapsulate(self, *args, **kwargs):
		m = urandom(32)
		m = H(m)
		K_bar, r = G(m + H(self.pk))
		c = self._CPAPKE_Enc(self.pk, m, r)
		K = KDF(K_bar + H(c))
		return c, K

	@timer(algorithm = "Kyber", function_name = "Decapsulate")
	def Decapsulate(self, c, *args, **kwargs):
		sk, pk, h, z = self.sk

		mp = Encode(self._CPAPKE_Dec(sk, c), 1)
		K_bar, rp = G(mp + h)
		cp = self._CPAPKE_Enc(pk, mp, rp)

		if Encode(c, 1) == Encode(cp, 1):
			return KDF(K_bar + H(c))
		else:
			return KDF(z + H(c))
