#include <vector>
#include <algorithm>
#include <climits>

class Solution {
public:
    int minFallingPathSum(std::vector<std::vector<int>>& matrix) {
        int rows = matrix.size();
        int cols = matrix[0].size();

        // Create a DP table to store intermediate results
        std::vector<std::vector<int>> dp(rows, std::vector<int>(cols, 0));

        // Copy the bottom row of the matrix to the DP table
        for (int col = 0; col < cols; col++) {
            dp[rows - 1][col] = matrix[rows - 1][col];
        }

        // Start from the second-to-last row and build the solution bottom-up
        for (int row = rows - 2; row >= 0; row--) {
            for (int col = 0; col < cols; col++) {
                int left = (col > 0) ? dp[row + 1][col - 1] : INT_MAX;
                int middle = dp[row + 1][col];
                int right = (col < cols - 1) ? dp[row + 1][col + 1] : INT_MAX;

                // Update the DP table with the minimum falling path sum
                dp[row][col] = matrix[row][col] + std::min({left, middle, right});
            }
        }

        // Find the minimum falling path sum from the top row
        return *std::min_element(dp[0].begin(), dp[0].end());
    }
};