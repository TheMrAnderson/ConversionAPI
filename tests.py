import unittest

class Tests(unittest.TestCase):

	def test_1(self):
		self.assertTrue(1==1, "One no longer equals one")

if __name__ == '__main__':
    unittest.main()