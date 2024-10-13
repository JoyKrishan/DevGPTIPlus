def solve_quadratic_equation(a_coefficient, b_coefficient, c_constant):
    """
    Calculate the roots of a quadratic equation of the form ax^2 + bx + c = 0.

    Parameters:
        a_coefficient (float): Coefficient of the x^2 term.
        b_coefficient (float): Coefficient of the x term.
        c_constant (float): Constant term.

    Returns:
        tuple: A tuple containing the two roots of the quadratic equation.
               If the discriminant is positive, the roots are real.
               If the discriminant is zero, the roots are real and identical.
               If the discriminant is negative, the roots are complex.
    """
    discriminant = b_coefficient**2 - 4 * a_coefficient * c_constant
    root1 = (-b_coefficient + cmath.sqrt(discriminant)) / (2 * a_coefficient)
    root2 = (-b_coefficient - cmath.sqrt(discriminant)) / (2 * a_coefficient)
root1, root2 = solve_quadratic_equation(a, b, c)
print("Root 1:", root1)  # Display the first root of the quadratic equation.
print("Root 2:", root2)  # Display the second root of the quadratic equation.
