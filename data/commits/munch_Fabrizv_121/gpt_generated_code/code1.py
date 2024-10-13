class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        """
        Calculates the maximum profit achievable by buying and selling a stock.

        Args:
            prices (List[int]): A list of integers representing the prices of the stock on each day.

        Returns:
            int: The maximum profit achievable. If no profit can be made, returns 0.

        Example:
            >>> solution = Solution()
            >>> solution.maxProfit([7, 1, 5, 3, 6, 4])
            5
            Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
        """
        left = 0
        right = 1
        max_profit = 0

        while right < len(prices):
            currProfit = prices[right] - prices[left]
            if prices[left] < prices[right]:
                max_profit = max(currProfit, max_profit)
            else:
                left = right
            right += 1

        return max_profit