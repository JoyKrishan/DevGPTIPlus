def custom_shell_sort(input_list):
    """
    Sort the input list using the Shell sort algorithm.

    Args:
    input_list (list): The input list to be sorted.

    Returns:
    list: The sorted list.
    """
    list_length = len(input_list)
    increment = list_length // 2
    while increment > 0:
        for i in range(increment, list_length):
            current_element = input_list[i]
            j = i
            while j >= increment and input_list[j - increment] > current_element:
                input_list[j] = input_list[j - increment]
                j -= increment
            input_list[j] = current_element
        increment //= 2
    return input_list

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = custom_shell_sort(arr)
print("Sorted array is:", sorted_arr)