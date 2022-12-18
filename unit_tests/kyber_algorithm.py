import sys
sys.path.insert(1, "../source/backend/lib")
sys.path.insert(1, "../source/backend/")

import kyber

def test_kem():
	alg = kyber.Kyber(256, 3329, 2, 2, 10, 4)
	alg.Keygen()
	for i in range(10):
		c, K = alg.Encapsulate()
		assert K == alg.Decapsulate(c)
