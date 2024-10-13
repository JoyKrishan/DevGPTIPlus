def read_numbers_from_file(filename):
    """Reads numbers from a file and returns a list of integers."""
    with open(filename, 'r') as file:
        numbers = [int(number.strip()) for number in file]
    return numbers

def sort_numbers(numbers):
    """Sorts the numbers using Python's built-in sort function."""
    return sorted(numbers)

def write_numbers_to_file(filename, numbers):
    """Writes the sorted numbers back to a file."""
    with open(filename, 'w') as file:
        file.writelines(f"{number}\n" for number in numbers)

def main():
    input_filename = 'input.txt'
    output_filename = 'sorted_numbers.txt'
    
    # Reading numbers from file
    numbers = read_numbers_from_file(input_filename)
    
    # Sorting numbers using Python's built-in sort
    sorted_numbers = sort_numbers(numbers)
    
    # Writing sorted numbers back to a file
    write_numbers_to_file(output_filename, sorted_numbers)
    
    # Optionally, reading and printing sorted numbers could be done if needed.
    print("Sorted Numbers:", sorted_numbers)

if __name__ == "__main__":
    main()