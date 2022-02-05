def new_gear_ratio(new_tire_diam_in, old_tire_diam_in, axle_ratio):
    """
    Determine the new gear ratio needed when moving to a different tire size
    to keep the overall ratio the same

    Parameters:
        - new_tire_diam_in: Diameter in inches of new tire
        - old_tire_diam_in: Diameter in inches of old tire
        - axle_ratio: Ring/pinion ratio before the colon, ex: 3.73

    Returns:
        Rounded gear ratio
    """
    return round((new_tire_diam_in / old_tire_diam_in) * axle_ratio, 2)


def effective_gear_ratio(new_tire_diam_in, old_tire_diam_in,
                         axle_ratio):
    """
    Determine the effective gear ratio when moving to a different tire size

    Parameters:
        - new_tire_diam_in: Diameter in inches of new tire
        - old_tire_diam_in: Diameter in inches of old tire
        - axle_ratio: Ring/pinion ratio before the colon, ex: 3.73

    Returns:
        Rounded gear ratio
    """
    return round((old_tire_diam_in / new_tire_diam_in) * axle_ratio, 2)


def engine_rpm(axle_ratio, vehicle_speed_mph, trans_ratio, tire_diam_in):
    """
    Determine the engine RPM at a given speed for the combination of the
    axle ratio, transmission gear and tire diameter

    Parameters:
        - axle_ratio: Ring/pinion ratio before the colon, ex: 3.73
        - vehicle_speed_mph: Vehicle speed in MPH
        - trans_ratio: Transmission ratio before the colon, ex: 2.54
        - tire_diam_in: Diameter in inches of tire

    Returns:
        Rounded engine speed
    """
    # 336.13 is used to convert the result to RPM
    # [63360 inches per mile / (60 miles per hour * Pi)]
    # http://www.crawlpedia.com/rpm_gear_calculator.htm
    return round((axle_ratio * vehicle_speed_mph
                  * trans_ratio * 336.13) / tire_diam_in, 1)


def vehicle_speed_at_engine_rpm(engine_rpm, tire_diam_in, trans_ratio,
                                aux_ratio, t_case_ratio, axle_ratio):
    """
    Determine the vehicle speed at a given engine RPM for the combination
    of the tire diameter, transmission gear, overdrive (if equipped, else 1,
    can also be used to figure a second transfer case),
    transfer case (high or low gear as needed), and axle ratio

    Parameters:
        - engine_rpm: RPM of the engine
        - tire_diam_in: Diameter in inches of tire
        - trans_ratio: Transmission ratio before the colon, ex: 2.54
        - aux_ratio: Overdrive or second transfer case ratio before the colon,
            ex: 4.0. 1 if not equipped
        - t_case_ratio: Transfer case ratio before the colon, ex: 2.72
        - axle_ratio: Ring/pinion ratio before the colon, ex: 3.73

    Returns:
        Rounded vehicle speed
    """
    # http://www.public.asu.edu/~grover/willys/speed.html
    # https://wahiduddin.net/calc/calc_speed_rpm.htm
    tire_diam = tire_diam_in / 2
    drivetrain_ratio = trans_ratio * \
        aux_ratio * t_case_ratio * axle_ratio
    return round(0.00595 * (engine_rpm * tire_diam) / drivetrain_ratio, 2)


def crawl_ratio(axle_ratio, low_t_case_ratio, trans_low_gear_ratio, aux_ratio):
    """
    Determine crawl ratio of vehicle
    Ratio Ranges:
        - Under 50: Most factory setups fall here
        - 50-60s: Backroads and light trail use
        - 80s: Intermediate trail use
        - 110-130s: Ideal for crawling. It allows taking obstacles at a slow,
        controlled speed without riding the brakes or applying constant
        throttle to avoid stalling
        - Over 130: Excessive with little to no additional benefit

    Parameters:
        - axle_ratio: Ring/pinion ratio before the colon, ex: 3.73
        - low_t_case_ratio: Transfer case ratio before the colon, ex: 2.72
        - trans_ratio: Transmission ratio before the colon, ex: 2.54
        - aux_ratio: Overdrive or second transfer case ratio before the colon,
            ex: 4.0. 1 if not equipped
    Returns:
        Rounded crawl ratio
    """
    # https://www.offroadxtreme.com/news/off-road-101-what-is-crawl-ratio/
    return round(axle_ratio * low_t_case_ratio * trans_low_gear_ratio * aux_ratio, 2)


def rotation_velocity(axle_ratio, speed_mph, tire_diam_in):
    """
    How fast an object rotates or revolves relative to another point

    Parameters:
        - axle_ratio: Ring/pinion ratio before the colon, ex: 3.73
        - speed_mph: Vehicle speed in MPH
        - tire_diam_in: Diameter in inches of tire
    """
    # https://www.ajdesigner.com/phpgear/gear_equation_effective_gear_ratio.php
    return round((168 * axle_ratio * speed_mph) / (tire_diam_in / 2), 4)


def gear_ratio(ring_gear_teeth, pinion_gear_teeth):
    """
    Determine the gear ratio by counting teeth on the ring and pinion

    Parameters:
        - ring_gear_teeth: Number of teeth on the ring gear
        - pinion_gear_teeth: Number of teeth on the pinion gear

    Returns:
        Rounded axle ratio
    """
    return round(ring_gear_teeth / pinion_gear_teeth, 2)


def actual_speed(new_tire_diam_in, old_tire_diam_in, speedo_mph):
    """
    Determine actual speed when changing tire sizes and not regearing.
    The speedometer is still calibrated at factory specs and this will show
    what speed you are actually running

    Parameters:
        - new_tire_diam_in: Diameter in inches of new tire
        - old_tire_diam_in: Diameter in inches of old tire
        - speedo_mph: Vehicle speed in MPH as read on the speedometer
    """
    return round((new_tire_diam_in / old_tire_diam_in) * speedo_mph, 2)
