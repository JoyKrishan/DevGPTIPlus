#Keith Del Rosario
#Task 2.2 Code Snippet

import cmath

def quadratic_formula(a, b, c):
    discriminant = b**2 - 4*a*c
    root1 = (-b + cmath.sqrt(discriminant)) / (2*a)
    root2 = (-b - cmath.sqrt(discriminant)) / (2*a)
    return root1, root2

# Example usage:
a = 1
b = -3
c = 2
root1, root2 = quadratic_formula(a, b, c)
print("Root 1:", root1)
print("Root 2:", root2)