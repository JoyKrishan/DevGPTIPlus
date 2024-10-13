def fibonacci(n):
    """
    Calculate the nth Fibonacci number using recursion.

    Args:
    n (int): The index of the Fibonacci number to calculate.

    Returns:
    int: The nth Fibonacci number.
    """
    if n <= 0:
        return "Input should be a positive integer."
    elif n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)