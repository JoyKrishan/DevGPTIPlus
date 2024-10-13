import math

def min_steps_to_empty_array(arr):
    # Step 1: Count the frequency of each unique element
    frequency = {}
    for num in arr:
        frequency[num] = frequency.get(num, 0) + 1

    # Step 2: Check if there is any element with a count of 1
    if any(count == 1 for count in frequency.values()):
        return -1

    # Step 3: Calculate minimum steps for each unique element
    total_steps = sum(math.ceil(count / 3) for count in frequency.values())

    # Handle the special case where the array length is 2
    if len(arr) == 2 and arr[0] == arr[1]:
        return 1

    return total_steps

# Example usage
arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
result = min_steps_to_empty_array(arr)
print("Minimum steps:", result)