from typing import List
from collections import defaultdict


class Solution:
    def minOperations(self, nums: List[int]) -> int:
        frequency = defaultdict(int)
        for num in nums:
            frequency[num] = 1 + frequency.get(num, 0)

        if sum(frequency.values()) % 3 != 0:
            return -1

        return sum(frequency.values()) // 3