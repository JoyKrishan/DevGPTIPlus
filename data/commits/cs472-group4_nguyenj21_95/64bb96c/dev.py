# Function to calculate factorial of a number
def factorial(n):
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact

# Main function
def main():
    try:
        num = int(input("Enter a number: "))
        result = factorial(num)
        print("Factorial of", num, "is", result)
    except ValueError as ve:
        print("Error:", ve)

# Call the main function
if __name__ == "__main__":
    main()