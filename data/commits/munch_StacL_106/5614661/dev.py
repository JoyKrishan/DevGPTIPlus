        zeroPtr = 0  # Pointer for the position where zeros will be placed
        twoPtr = len(nums) - 1  # Pointer for the position where twos will be placed
        i = 0  # Current index for iteration
                # Swap current element with element at zeroPtr
                zeroPtr += 1  # Move zeroPtr to the right
                # Swap current element with element at twoPtr
                twoPtr -= 1  # Move twoPtr to the left
                i += 1  # Move to the next element
            print(nums)  # For visualization of each step
        
        return  # Sorted nums array is already modified in-place
