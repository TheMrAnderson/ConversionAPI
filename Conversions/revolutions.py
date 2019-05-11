def revs_per_mile_per_mm(circumference):
    # Convert a mile to mm, then gets revs per mile
    # Mile = 1609344 mm
    return 1609344 / circumference


def revs_per_mile_per_in(circumference):
    # Convert a mile to inches, then gets revs per mile
    # Mile = 63360 in
    return 63360 / circumference


def revs_per_km_per_mm(circumference):
    # Convert a KM to MM, then get revs per KM
    # KM = 1, 000, 000 MM
    return 1000000 / circumference


def revs_per_km_per_in(circumference):
    # Convert a KM to inches, then get revs per KM
    # KM = 39370.0787 Inches
    return 39370.0787 / circumference
