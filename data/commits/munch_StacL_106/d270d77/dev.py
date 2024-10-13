from typing import List

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zeroPtr = 0
        twoPtr = len(nums) - 1
        
        i = 0
        while i <= twoPtr:
            if nums[i] == 0:
                nums[i], nums[zeroPtr] = nums[zeroPtr], nums[i]
                zeroPtr += 1
            if nums[i] == 2:
                nums[i], nums[twoPtr] = nums[twoPtr], nums[i]
                twoPtr -= 1
            else:
                i += 1
            print(nums)


# Test the Solution class
if __name__ == "__main__":
    solution = Solution()
    
    # Test case
    nums = [2,0,2,1,1,0]
    solution.sortColors(nums)
    print("Sorted Colors:", nums)