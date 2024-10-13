        # Step 1: Count the frequency of each unique element
        # Step 2: Check if there is any element with a count of 1
        if any(count == 1 for count in frequency.values()):
            return -1
        # Step 3: Calculate minimum steps for each unique element
        total_steps = sum(math.ceil(count / 3) for count in frequency.values())

        # Handle the special case where the array length is 2
        if len(nums) == 2 and nums[0] == nums[1]:
            return 1

        return total_steps