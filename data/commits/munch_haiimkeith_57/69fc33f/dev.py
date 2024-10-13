    """
    Calculate the length of the hypotenuse of a right-angled triangle using the Pythagorean theorem.

    Args:
        a (float): Length of one side of the triangle.
        b (float): Length of the other side of the triangle.

    Returns:
        float: Length of the hypotenuse.
    """

    # Alternative solution that provides further readability for the user
    # return math.sqrt(a**2 + b**2)
    # Into
    # return math.sqrt(a * a + b * b)

    # Using math library, we can optimize the code further and provide an alternate solution
    # that would increase readbility and efficiency of the code snippet while also being more
    # beginner friendly, giving the two parameters and having the math.hypot() function calculate
    # the hypotenuse if the user doesn't understand the Pythagorean theorem.
    return math.hypot(a, b)
    