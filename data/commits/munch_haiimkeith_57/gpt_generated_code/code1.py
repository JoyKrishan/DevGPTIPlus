import math

def pythagorean_theorem(a, b):
    """
    Calculate the length of the hypotenuse of a right-angled triangle using the Pythagorean theorem.

    Args:
        a (float): Length of one side of the triangle.
        b (float): Length of the other side of the triangle.

    Returns:
        float: Length of the hypotenuse.
    """
    return math.sqrt(a**2 + b**2)