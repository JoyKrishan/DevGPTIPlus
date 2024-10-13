def factorial(n):
    result = 1
    while n > 1:
        result *= n
        n -= 1
    return result

def main():
    number = 5
    result = factorial(number)
    print(f"The factorial of {number} is: {result}")

if __name__ == "__main__":
    main()