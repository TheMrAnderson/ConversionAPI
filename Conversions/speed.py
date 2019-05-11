def mph_to_knots(input):
    return input * 0.87


def knots_to_mph(input):
    return input * 1.15


def knots_to_mach(input):
    return input / 661.7


def mph_to_mach(input):
    knots = mph_to_knots(input)
    return knots_to_mach(knots)

