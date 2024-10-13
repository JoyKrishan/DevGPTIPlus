#Keith Del Rosario
#Task 2.3 Code Snippet

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

    # Alternative route to increase readability by expanding the equation
    # return math.sqrt(a * a + b * b)

    # Using math.hypot increases readibility and optimization as it takes in two
    # parameters in and returns the hypotenuse using the pythagorean theorem
    return math.hypot(a, b)

# Example usage:
side1 = 3
side2 = 4
hypotenuse = pythagorean_theorem(side1, side2)
print("Length of the hypotenuse:", hypotenuse)