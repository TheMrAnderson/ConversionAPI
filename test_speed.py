import unittest
from Conversions import speed


class Tests(unittest.TestCase):

	def test_mph_to_knots(self):
		self.assertEqual(speed.mph_to_knots(300), 260.69274)

	def test_knots_to_mph(self):
		self.assertEqual(speed.knots_to_mph(300), 345.234)

	def test_knots_to_mach(self):
		self.assertEqual(speed.knots_to_mach(300), 0.45353473018113)

	def test_mph_to_mach(self):
		self.assertEqual(speed.mph_to_mach(300), 0.39089999999999997)


if __name__ == '__main__':
    unittest.main()
