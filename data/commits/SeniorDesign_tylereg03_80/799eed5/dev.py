# Conversion functions

# Pound conversions
    return weight * 16
    return weight / 2.205
    return weight * 453.6
    return weight / 2205
    return weight / 14
# Ounce conversions
    return weight / 16
    return weight / 35.274
    return weight * 28.35
    return weight / 35270
    return weight / 224
# Kilogram conversions
    return weight * 2.205
    return weight * 35.274
    return weight * 1000
    return weight / 1000
    return weight / 6.35
# Gram conversions
    return weight / 453.6
    return weight / 28.35
    return weight / 1000
    return weight / 1000000
    return weight / 6350
# Ton conversions
    return weight * 2205
    return weight * 35270
    return weight * 1000
    return weight * 1000000
    return weight * 157.5
# Stone conversions
    return weight * 14
    return weight * 224
    return weight * 6.35
    return weight * 6350
    return weight / 157.5
is_random = False
# Check command-line arguments
            is_random = True
# If RANDOM option is chosen, select a random weight and unit
if is_random:
    weight = float(random.randint(1, 100))
    # Otherwise, get weight and unit from command-line arguments
# Perform the conversion based on the selected unit