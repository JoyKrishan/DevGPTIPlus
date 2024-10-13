    """
    Perform Bubble Sort on the given list 'arr'.

    Parameters:
    arr (list): The input list to be sorted.

    Returns:
    None: The function sorts the list in-place and doesn't return anything.
    """
    n = len(arr)
    
    # Flag to check if any swaps occurred in the last iteration
    swapped = False
    
    # Outer loop for each pass through the list
    for i in range(n-1):
        
        # Inner loop for comparing and swapping adjacent elements
        for j in range(0, n-i-1):

            # Compare adjacent elements, swap if needed, and set the 'swapped' flag
            if arr[j] > arr[j + 1]:
                swapped = True
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
        
        # If no swaps occurred in the last iteration, the list is already sorted
        if not swapped:
            return
# Call the bubbleSort function to sort the array
# Display the sorted array
    print("% d" % arr[i], end=" ")