import unittest
from Conversions import gear_ratios


class Tests(unittest.TestCase):

    def test_new_gear_ratio(self):
        self.assertEqual(gear_ratios.new_gear_ratio(
            35, 30, 3.73), 4.35)

    def test_effective_gear_ratio(self):
        self.assertEqual(gear_ratios.effective_gear_ratio(
            35, 30, 3.73), 3.20)

    def test_engine_rpm(self):
        self.assertEqual(gear_ratios.engine_rpm(
            3.73, 30, 2.54, 30), 3184.6)

    def test_vehicle_speed_at_engine_rpm(self):
        self.assertEqual(gear_ratios.vehicle_speed_at_engine_rpm(
            1500, 35, 2.54, 1, 2.72, 3.73), 6.06)

    def test_crawl_ratio(self):
        self.assertEqual(gear_ratios.crawl_ratio(3.73, 2.72, 3.14), 31.86)

    def test_rotation_velocity(self):
        self.assertEqual(gear_ratios.rotation_velocity(
            3.73, 30, 17), 1105.8353)

    def test_gear_ratio(self):
        self.assertEqual(gear_ratios.gear_ratio(43, 11), 3.91)

    def test_actual_speed(self):
        self.assertEqual(gear_ratios.actual_speed(
            35, 30, 50), 58.33)


if __name__ == '__main__':
    unittest.main()
