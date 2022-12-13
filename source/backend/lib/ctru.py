from lib.timer import timer
from lib.algorithm import AlgorithmInterface
from lib.ctru_utils import *
from hashlib import sha256, blake2b

class CTRU(AlgorithmInterface):
	def __init__(self, n, q, q2, eta, *args, **kwargs):
		"""constructor function that uses the specified algorithm parameters, example configurations can be found in Table 2"""
		self.n = n
		self.q = q
		self.q2 = q2
		self.eta = eta
		self.p = 2
		self.iota = 256

		self.R = get_ring_modulus(self.n)

		self.pk = None
		self.sk = None
		self.z = None

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

	def _PKE_keygen(self):
		"""the PKE keygen agorithm described in section 4.1, Algorithm 4; it generate the public and private keys"""
		g = (random_polynom(self.n, self.eta) % self.R).set_domain(GF(self.q))

		fp = None
		f = None
		finv = None

		while True:
			try:
				fp = random_polynom(self.n, self.eta) #randomly pick a polynom
				f = (self.p * fp + 1) #calculate f from f'
				finv = invert((f % self.R).set_domain(GF(self.q)), self.R.set_domain(GF(self.q))) #find and remember the multiplicative inverse
				break
			except NotInvertible as e:
				continue

		h = ((g * finv)%self.R).set_domain(GF(self.q)) #calculate h
		
		self.pk = h #h is the public key
		self.sk = f #f is the private key

		return g #g isn't needed anymore but we'll use it in an unit test

	def _PKE_encrypt(self, m, r = None, e = None):
		"""the PKE encryption agorithm described in section 4.1, Algorithm 5; it will encrypt our message m using the ephemeral key r and the error polynom e"""

		# firstly we need to sample r and e if we aren't running in the KEM mode of operation
		if r is None:
			r = random_polynom(self.n, self.eta)

		if e is None:
			e = random_polynom(self.n, self.eta)

		t = ((self.pk * r) + e) % self.R

		m = round(self._polynom_encode(m, self.q/2))

		c0 = ((self.q2/self.q)*(t + m))%self.R
		return (round(c0 % self.R)).set_domain(GF(self.q2))

	def _PKE_decrypt(self, c):
		"""the PKE decryption algorithm described in section 4.1, Algorithm 6; gived a ciphertext we can try to decrypt it with out prive key"""
		m0 = ext_mod((self.sk * c) % self.R, self.q2)
		return self._polynom_decode(m0, self.q2/2)

	def ID(self):
		"""the public key ID"""
		return sha256(PolynomtoBytes(self.pk)).digest()

	def H(self, *argv):
		digest_size = (3*self.n)//8
		data = b""

		for i in argv:
			if isinstance(i, Poly):
				i = PolynomtoBytes(i)

			data += i

		hash = b""
		for i in range(0, digest_size, 64):
			hash +=	blake2b(data[i:i+64], digest_size = 64).digest()

		K = hash[:self.n//8]
		coin = hash[self.n//8:]
		return K, coin


	@timer(algorithm = "CTRU", function_name = "Keygen")
	def Keygen(self, *args, **kwargs):
		"""the KEM keygen algorithm described in section 4.1, Algorithm 9"""
		self._PKE_keygen()
		self.z = sample_binary_space(self.iota)

	@timer(algorithm = "CTRU", function_name = "Encapsulate")
	def Encapsulate(self, *args, **kwargs):
		"""the KEM encaps algorithm described in section 4.1, Algorithm 10"""
		m = sample_binary_space(self.n//2)
		K, coin = self.H(self.ID(), m)

		r = BytestoPolynom(coin[:self.n//8])
		e = BytestoPolynom(coin[self.n//8:])

		c = self._PKE_encrypt(m, r, e)
		return (c, K)

	@timer(algorithm = "CTRU", function_name = "Decapsulate")
	def Decapsulate(self, c,  *args, **kwargs):
		"""the KEM decaps algorithm described in section 4.1, Algorithm 11"""
		mp = self._PKE_decrypt(c)
		Kp, coinp = self.H(self.ID(), mp)
		Kn = self.H(self.ID(), self.z, c)

		rp = BytestoPolynom(coinp[:self.n//8])
		ep = BytestoPolynom(coinp[self.n//8:])

		if c == self._PKE_encrypt(mp, rp, ep):
			return Kp
		else:
			return Kn
