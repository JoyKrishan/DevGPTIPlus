    """
    Sorts the input array using the merge sort algorithm.

    Parameters:
    arr (list): The array to be sorted.

    Returns:
    list: The sorted array.
    """
        mid_index = len(arr) // 2
        left_half = arr[:mid_index]
        right_half = arr[mid_index:]
        # Recursively sort the left and right halves
        # Merge the sorted halves
        # Copy the remaining elements of left_half, if any
        # Copy the remaining elements of right_half, if any
def test_merge_sort():
    # Test cases
    test_cases = [
        ([], []),
        ([5], [5]),
        ([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]),
        ([-2, 7, 0, -1, -3, 5], [-3, -2, -1, 0, 5, 7]),
        (['apple', 'banana', 'orange', 'cherry'], ['apple', 'banana', 'cherry', 'orange'])
    ]

    for arr, expected in test_cases:
        result = merge_sort(arr)
        assert result == expected, f"Failed for input: {arr}, expected: {expected}, got: {result}"

    print("All test cases passed.")
test_merge_sort()