def merge_sort(arr):
    """
    Sorts the input array using the merge sort algorithm.

    Parameters:
    arr (list): The array to be sorted.

    Returns:
    list: The sorted array.
    """

    if len(arr) > 1:
        mid_index = len(arr) // 2
        left_half = arr[:mid_index]
        right_half = arr[mid_index:]

        # Recursively sort the left and right halves
        merge_sort(left_half)
        merge_sort(right_half)

        # Merge the sorted halves
        i = j = k = 0
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        # Copy the remaining elements of left_half, if any
        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        # Copy the remaining elements of right_half, if any
        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1

    return arr

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