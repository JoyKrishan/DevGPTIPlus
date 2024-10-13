    int result = 1;
    for (int i = 1; i <= n; ++i) {
        result *= i;
    return result;

    // Check for negative input
    if (number < 0) {
        std::cout << "Factorial is not defined for negative numbers." << std::endl;
    } else {
        std::cout << "Factorial of " << number << " is " << factorial(number) << std::endl;
    }
    