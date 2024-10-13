"""
The factorial of a number is the product of all positive integers less than or equal to that number.
For example, the factorial of 5 (denoted as 5!) is 1*2*3*4*5 = 120.

This implementation uses a loop instead of recursion for better performance and to avoid potential stack overflow issues with large inputs.
"""

def factorial(n):
    if n < 0:
        raise ValueError("Input must be a non-negative integer.")
    result = 1
    for i in range(1, n+1):
        result *= i
    return result