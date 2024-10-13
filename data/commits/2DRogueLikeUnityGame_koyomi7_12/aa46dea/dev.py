    """
    Finds two numbers in a list that sum up to a given target.

    Args:
        nums (List[int]): List of integers.
        target (int): Target sum.

    Returns:
        List[int]: Indices of the two numbers that sum up to the target, if found.
                   Returns an empty list if no such pair exists.

    Example:
        nums = [2, 7, 11, 15]
        target = 9
        print(two_sum(nums, target))  # Output: [0, 1]
    """
    # Iterate through the list of numbers along with their indices
        # Calculate the difference needed to reach the target
        
        # Check if the difference exists in the hashmap
            # If found, return the indices of the current number and the one that adds up to the target
        
        # If the difference does not exist in the hashmap, store the current number and its index
    # If no solution is found, return an empty list