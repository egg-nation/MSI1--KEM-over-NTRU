import sys
sys.path.insert(1, "../source/backend/lib")
sys.path.insert(1, "../source/backend/")

import ctru

def test_pke_keygen():
	alg = ctru.CTRU(32, 3457, 2**9, 2)
	g = (alg._PKE_keygen()%alg.R).set_domain(ctru.GF(alg.q))
	assert ((alg.pk * alg.sk)%alg.R).set_domain(ctru.GF(alg.q)) == g

def test_pke():
	alg = ctru.CTRU(512, 3457, 2**9, 2)
	alg._PKE_keygen()
	m = ctru.sample_binary_space(alg.n//2)
	c = alg._PKE_encrypt(m)
	assert alg._PKE_decrypt(c) == m

def test_kem():
	alg = ctru.CTRU(512, 3457, 2**9, 2)
	alg.Keygen()
	for i in range(10):
		c, K = alg.Encapsulate()
		Kp = alg.Decapsulate(c)
		assert K == Kp

