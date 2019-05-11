def determine_new_gear_ratio(new_tire_diam, old_tire_diam, old_axle_ratio):
    return (new_tire_diam / old_tire_diam) * old_axle_ratio


def determine_effective_gear_ratio(new_tire_diam, old_tire_diam, axle_ratio):
    return (old_tire_diam / new_tire_diam) * axle_ratio


def engine_rpm(axle_ratio, vehicle_speed_mph, transmission_ratio, tire_diameter_in):
    # 336.13 is used to convert the result to RPM[63360 inches per mile / (60 miles per hour * Pi)]
    # http://www.crawlpedia.com/rpm_gear_calculator.htm
    return (axle_ratio * vehicle_speed_mph * transmission_ratio * 336.13) / tire_diameter_in


def vehicle_speed_at_engine_rpm(engine_rpm, tire_height_in, transmission_ratio, od_ratio, transfer_case_ratio, axle_ratio):
    # http://www.public.asu.edu/~grover/willys/speed.html
    # https://wahiduddin.net/calc/calc_speed_rpm.htm
    tire_diam = tire_height_in / 2
    drivetrain_ratio = transmission_ratio * od_ratio * transfer_case_ratio * axle_ratio
    return 0.00595 * (engine_rpm * tire_diam) / drivetrain_ratio
