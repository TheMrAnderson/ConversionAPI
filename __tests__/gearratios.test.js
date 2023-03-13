const code = require('../Conversions/gearRatios')



NEW_TIRE_DIAM = 37
OLD_TIRE_DIAM = 30
NEW_AXLE_RATIO = 4.88
OLD_AXLE_RATIO = 3.73
T_CASE_RATIO = 2.72
TRANS_RATIO_1 = 3.83
TRANS_RATIO_2 = 2.33
TRANS_RATIO_3 = 1.44
TRANS_RATIO_4 = 1.00
TRANS_RATIO_5 = 0.79
TRANS_RATIO_R = 4.22

test('55mph stock', () => {
	expect(code.engineRpm(OLD_AXLE_RATIO, 55, TRANS_RATIO_5, OLD_TIRE_DIAM)).toBe(1)
})

test('55mph mod', () => {
	expect(code.engineRpm(NEW_TIRE_DIAM, 55, TRANS_RATIO_5, NEW_TIRE_DIAM)).toBe(1)
})

// #     def test_new_gear_ratio(self):
// #         self.assertEqual(gear_ratios.new_gear_ratio(
// #             Tests.NEW_TIRE_DIAM_IN, Tests.OLD_TIRE_DIAM_IN, Tests.AXLE_RATIO), 4.60)

// #     def test_effective_gear_ratio(self):
// #         self.assertEqual(gear_ratios.effective_gear_ratio(
// #             Tests.NEW_TIRE_DIAM_IN, Tests.OLD_TIRE_DIAM_IN, Tests.AXLE_RATIO), 3.02)

// #     def test_engine_rpm(self):
// #         self.assertEqual(gear_ratios.engine_rpm(
// #             Tests.AXLE_RATIO, Tests.OLD_TIRE_DIAM_IN, 2.54, 30), 3184.6)

// #     def test_vehicle_speed_at_engine_rpm(self):
// #         self.assertEqual(gear_ratios.vehicle_speed_at_engine_rpm(
// #             1500, Tests.NEW_TIRE_DIAM_IN, 2.54, 1, Tests.T_CASE_RATIO, Tests.AXLE_RATIO), 6.41)

// #     def test_crawl_ratio(self):
// #         self.assertEqual(gear_ratios.crawl_ratio(
// #             Tests.AXLE_RATIO, Tests.T_CASE_RATIO, 3.14), 31.86)

// #     def test_rotation_velocity(self):
// #         self.assertEqual(gear_ratios.rotation_velocity(
// #             Tests.AXLE_RATIO, Tests.OLD_TIRE_DIAM_IN, 17), 1105.8353)

// #     def test_gear_ratio(self):
// #         self.assertEqual(gear_ratios.gear_ratio(43, 11), 3.91)

// #     def test_actual_speed(self):
// #         self.assertEqual(gear_ratios.actual_speed(
// #             Tests.NEW_TIRE_DIAM_IN, Tests.OLD_TIRE_DIAM_IN, 50), 61.67)


// # if __name__ == '__main__':
// #     unittest.main()
