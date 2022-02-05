from Conversions import gear_ratios


NEW_TIRE_DIAM_IN = 37
OLD_TIRE_DIAM_IN = 30
AXLE_RATIO = 3.73
T_CASE_RATIO = 2.72
TRANS_RATIO_1 = 3.83
TRANS_RATIO_2 = 2.33
TRANS_RATIO_3 = 1.44
TRANS_RATIO_4 = 1.00
TRANS_RATIO_5 = 0.79
TRANS_RATIO_R = 4.22
OD_RATIO = 1
AXLE_456 = 4.56
AXLE_488 = 4.88
AXLE_512 = 5.12


def worker_veh_speed_at_rpm(rpm, tire_diam, trans, axle_ratio, gear_name):
    print(f'{rpm} RPM')
    result = gear_ratios.vehicle_speed_at_engine_rpm(
        rpm, tire_diam, trans, 1, 1, axle_ratio)
    print(f'  Original Speed {gear_name} Gear: {result}')
    result = gear_ratios.vehicle_speed_at_engine_rpm(
        rpm, tire_diam, trans, 1, 1, AXLE_456)
    print(f'  Opt 1 Speed {gear_name} Gear: {result}')
    result = gear_ratios.vehicle_speed_at_engine_rpm(
        rpm, tire_diam, trans, 1, 1, AXLE_488)
    print(f'  Opt 2 Speed {gear_name} Gear: {result}')
    result = gear_ratios.vehicle_speed_at_engine_rpm(
        rpm, tire_diam, trans, 1, 1, AXLE_512)
    print(f'  Opt 3 Speed {gear_name} Gear: {result}')


def list_veh_speed_range():
    rpms = 650, 1000, 1500, 2000, 2500, 3000
    new_ratio = gear_ratios.new_gear_ratio(
        NEW_TIRE_DIAM_IN, OLD_TIRE_DIAM_IN, AXLE_RATIO)
    for engine_rpm in rpms:
        worker_veh_speed_at_rpm(engine_rpm, NEW_TIRE_DIAM_IN,
                                TRANS_RATIO_1, new_ratio, '1st')
        worker_veh_speed_at_rpm(engine_rpm, NEW_TIRE_DIAM_IN,
                                TRANS_RATIO_2, new_ratio, '2nd')
        worker_veh_speed_at_rpm(engine_rpm, NEW_TIRE_DIAM_IN,
                                TRANS_RATIO_3, new_ratio, '3rd')
        worker_veh_speed_at_rpm(engine_rpm, NEW_TIRE_DIAM_IN,
                                TRANS_RATIO_4, new_ratio, '4th')
        worker_veh_speed_at_rpm(engine_rpm, NEW_TIRE_DIAM_IN,
                                TRANS_RATIO_5, new_ratio, '5th')
        worker_veh_speed_at_rpm(engine_rpm, NEW_TIRE_DIAM_IN,
                                TRANS_RATIO_R, new_ratio, 'Reverse')


def worker_rpm_at_speed(speed, gear_ratio, gear_name):
    result = gear_ratios.engine_rpm(
        AXLE_RATIO, speed, gear_ratio, OLD_TIRE_DIAM_IN)
    print(f'Engine RPM @ {speed} in {gear_name} Stock: {result}')
    result = gear_ratios.engine_rpm(
        AXLE_456, speed, gear_ratio, NEW_TIRE_DIAM_IN)
    print(f'Engine RPM @ {speed} in {gear_name} Opt 1: {result}')
    result = gear_ratios.engine_rpm(
        AXLE_488, speed, gear_ratio, NEW_TIRE_DIAM_IN)
    print(f'Engine RPM @ {speed} in {gear_name} Opt 2: {result}')
    result = gear_ratios.engine_rpm(
        AXLE_512, speed, gear_ratio, NEW_TIRE_DIAM_IN)
    print(f'Engine RPM @ {speed} in {gear_name} Opt 3: {result}')


def list_rpm_range():
    worker_rpm_at_speed(70, TRANS_RATIO_5, '5th')
    worker_rpm_at_speed(45, TRANS_RATIO_4, '4th')
    worker_rpm_at_speed(60, TRANS_RATIO_5, '5th')
    worker_rpm_at_speed(30, TRANS_RATIO_3, '3rd')


def main():
    result = gear_ratios.crawl_ratio(AXLE_RATIO, T_CASE_RATIO, TRANS_RATIO_1)
    print(f'Crawl Ratio Stock: {result}')
    result = gear_ratios.crawl_ratio(AXLE_456, T_CASE_RATIO, TRANS_RATIO_1)
    print(f'Crawl Ratio Opt 1: {result}')
    result = gear_ratios.crawl_ratio(AXLE_488, T_CASE_RATIO, TRANS_RATIO_1)
    print(f'Crawl Ratio Opt 2: {result}')
    result = gear_ratios.crawl_ratio(AXLE_512, T_CASE_RATIO, TRANS_RATIO_1)
    print(f'Crawl Ratio Opt 3: {result}')

    list_rpm_range()
    list_veh_speed_range()


if __name__ == '__main__':
    main()
