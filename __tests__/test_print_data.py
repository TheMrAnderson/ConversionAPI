# from Conversions import gear_ratios


# NEW_TIRE_DIAM_IN = 37
# OLD_TIRE_DIAM_IN = 30
# AXLE_RATIO = 3.73
# T_CASE_RATIO = 4
# TRANS_RATIO_1 = 4.01
# TRANS_RATIO_2 = 2.33
# TRANS_RATIO_3 = 1.39
# TRANS_RATIO_4 = 1.00
# TRANS_RATIO_5 = 0.78
# TRANS_RATIO_R = 3.57
# OD_RATIO = 1.5
# AXLE_RATIOS = 4.6, 4.88, 5.12, 5.38


# def worker_veh_speed_at_rpm(rpm, tire_diam, trans,
#                             gear_name, t_case):
#     print(f'{rpm} RPM')
#     for ratio in AXLE_RATIOS:
#         result = gear_ratios.vehicle_speed_at_engine_rpm(
#             rpm, tire_diam, trans, OD_RATIO, t_case, ratio)
#         print(f'  {ratio} Speed {gear_name} Gear @ {t_case}:1 T-Case: {result}')


# def list_veh_speed_range():
#     rpms = 850, 1000
#     for engine_rpm in rpms:
#         worker_veh_speed_at_rpm(engine_rpm, NEW_TIRE_DIAM_IN,
#                                 TRANS_RATIO_1, '1st', 1)
#         worker_veh_speed_at_rpm(engine_rpm, NEW_TIRE_DIAM_IN,
#                                 TRANS_RATIO_1, '1st', T_CASE_RATIO)


# def worker_rpm_at_speed(speed, gear_ratio, gear_name):
#     for ratio in AXLE_RATIOS:
#         result = gear_ratios.engine_rpm(
#             ratio, speed, gear_ratio, NEW_TIRE_DIAM_IN)
#         print(
#             f'  Engine RPM @ {speed} in {gear_name} @ {ratio}:1 T-Case: {result}')


# def list_rpm_range():
#     worker_rpm_at_speed(70, TRANS_RATIO_5, '5th')
#     worker_rpm_at_speed(45, TRANS_RATIO_4, '4th')
#     worker_rpm_at_speed(60, TRANS_RATIO_5, '5th')
#     worker_rpm_at_speed(30, TRANS_RATIO_3, '3rd')


# def main():
#     new_ratio = gear_ratios.new_gear_ratio(
#         NEW_TIRE_DIAM_IN, OLD_TIRE_DIAM_IN, AXLE_RATIO)
#     print(
#         f'Moving from {OLD_TIRE_DIAM_IN}" to {NEW_TIRE_DIAM_IN}" tires would require a {new_ratio} to be the same')
#     for ratio in AXLE_RATIOS:
#         result = gear_ratios.crawl_ratio(
#             ratio, T_CASE_RATIO, TRANS_RATIO_1, OD_RATIO)
#         print(f'Crawl Ratio {ratio}: {result[0]} {result[1]}')

#     list_rpm_range()
#     list_veh_speed_range()


# if __name__ == '__main__':
#     main()
