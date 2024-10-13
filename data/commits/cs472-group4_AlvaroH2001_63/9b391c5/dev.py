    """Reads numbers from a file and returns a list of integers."""
        numbers = [int(number.strip()) for number in file]
def sort_numbers(numbers):
    """Sorts the numbers using Python's built-in sort function."""
    return sorted(numbers)

    """Writes the sorted numbers back to a file."""
        file.writelines(f"{number}\n" for number in numbers)
    # Sorting numbers using Python's built-in sort
    sorted_numbers = sort_numbers(numbers)
    # Optionally, reading and printing sorted numbers could be done if needed.
    print("Sorted Numbers:", sorted_numbers)