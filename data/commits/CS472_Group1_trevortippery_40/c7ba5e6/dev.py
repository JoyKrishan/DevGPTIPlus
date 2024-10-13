    """
    Calculate the factorial of a given number.

    Args:
        n (int): The input integer for which the factorial is to be calculated.

    Returns:
        int: The factorial of the input integer.

    Raises:
        ValueError: If the input is a negative integer.
    """
    if n < 0:
        raise ValueError("Factorial is not defined for negative integers.")
    