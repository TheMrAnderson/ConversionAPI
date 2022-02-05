def new_gear_ratio(new_tire_diam_in, old_tire_diam_in, axle_ratio):
    """
    Determine the new gear ratio when moving to a different tire size

    Parameters:
        - new_tire_diam_in: Diameter in inches of new tire
        - old_tire_diam_in: Diameter in inches of old tire
        - axle_ratio: Numeric ratio before the colon, ex: 3.73

    Returns:
        Rounded gear ratio
    """
    return round((new_tire_diam_in / old_tire_diam_in) * axle_ratio, 2)


def effective_gear_ratio(new_tire_diam_in, old_tire_diam_in,
                         axle_ratio):
    return round((old_tire_diam_in / new_tire_diam_in) * axle_ratio, 2)


def engine_rpm(axle_ratio, vehicle_speed_mph, trans_ratio, tire_diam_in):
    # 336.13 is used to convert the result to RPM
    # [63360 inches per mile / (60 miles per hour * Pi)]
    # http://www.crawlpedia.com/rpm_gear_calculator.htm
    return round((axle_ratio * vehicle_speed_mph
                  * trans_ratio * 336.13) / tire_diam_in, 1)


def vehicle_speed_at_engine_rpm(engine_rpm, tire_height_in, trans_ratio,
                                od_ratio, t_case_ratio, axle_ratio):
    # http://www.public.asu.edu/~grover/willys/speed.html
    # https://wahiduddin.net/calc/calc_speed_rpm.htm
    tire_diam = tire_height_in / 2
    drivetrain_ratio = trans_ratio * \
        od_ratio * t_case_ratio * axle_ratio
    return round(0.00595 * (engine_rpm * tire_diam) / drivetrain_ratio, 2)


def crawl_ratio(axle_ratio, low_t_case_ratio, trans_low_gear_ratio):
    return round(axle_ratio * low_t_case_ratio * trans_low_gear_ratio, 2)


def rotation_velocity(axle_ratio, speed, tire_radius):
    return round((168 * axle_ratio * speed) / tire_radius, 4)


def gear_ratio(ring_gear_teeth, pinion_gear_teeth):
    return round(ring_gear_teeth / pinion_gear_teeth, 2)


def actual_speed(new_tire_diam_in, old_tire_diam_in, speedo_mph):
    return round((new_tire_diam_in / old_tire_diam_in) * speedo_mph, 2)
