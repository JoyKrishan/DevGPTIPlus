class Solution:
    def minOperations(self, nums: List[int]) -> int:
        """
        Calculate the minimum number of operations needed to make all elements
        of the given list nums have the same value. An operation involves
        incrementing or decrementing an element by 1.
        Args:
            nums (List[int]): The input list of integers.
        Returns:
            int: The minimum number of operations required. Returns -1 if it's
            not possible to make all elements equal.
        """
        # Step 1: Count the frequency of each unique element
        frequency = {}
        for num in nums:
	@@ -16,7 +28,7 @@ def minOperations(self, nums: List[int]) -> int:
        # Step 3: Calculate minimum steps for each unique element
        total_steps = sum(math.ceil(count / 3) for count in frequency.values())

        # Handle the special case where the array length is 2 and both elements are equal
        if len(nums) == 2 and nums[0] == nums[1]:
            return 1