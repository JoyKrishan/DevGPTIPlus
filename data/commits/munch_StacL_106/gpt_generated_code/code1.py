class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zeroPtr = 0  # Pointer for the position where zeros will be placed
        twoPtr = len(nums) - 1  # Pointer for the position where twos will be placed
        
        i = 0  # Current index for iteration
        while i <= twoPtr:
            if nums[i] == 0:
                # Swap current element with element at zeroPtr
                nums[i], nums[zeroPtr] = nums[zeroPtr], nums[i]
                zeroPtr += 1  # Move zeroPtr to the right
            if nums[i] == 2:
                # Swap current element with element at twoPtr
                nums[i], nums[twoPtr] = nums[twoPtr], nums[i]
                twoPtr -= 1  # Move twoPtr to the left
            else:
                i += 1  # Move to the next element
            print(nums)  # For visualization of each step
        
        return  # Sorted nums array is already modified in-place