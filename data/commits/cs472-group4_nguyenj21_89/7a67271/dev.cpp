# Function to calculate factorial of a number
def factorial(n):
    fact = 1
    for i in range(1, n + 1):
        fact = fact * i
    return fact

# Main function
def main():
    num = int(input("Enter a number: "))
    result = factorial(num)
    print("Factorial of", num, "is", result)

# Call the main function
main()