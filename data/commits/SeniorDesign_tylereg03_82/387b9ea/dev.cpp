// //class Solution {
// public:
//     int minFallingPathSum(vector<vector<int>>& matrix) {
//         int minFallingSum = INT_MAX;
//         for (int startCol = 0; startCol < matrix.size(); startCol++) {
//             minFallingSum =
//                 min(minFallingSum, findMinFallingPathSum(matrix, 0, startCol));
//         }
//         return minFallingSum;
//     }

//     int findMinFallingPathSum(vector<vector<int>>& matrix, int row, int col) {
//         // check if we are out of the left or right boundary of the matrix
//         if (col < 0 || col == matrix.size()) {
//             return INT_MAX;
//         }
//         // check if we have reached the last row
//         if (row == matrix.size() - 1) {
//             return matrix[row][col];
//         }

//         // calculate the minimum falling path sum starting from each possible
//         // next step
//         int left = findMinFallingPathSum(matrix, row + 1, col);
//         int middle = findMinFallingPathSum(matrix, row + 1, col + 1);
//         int right = findMinFallingPathSum(matrix, row + 1, col - 1);

//         return min(left, min(middle, right)) + matrix[row][col];
//     }
// };

//refactored solution provided by chatgbt
//class Solution {
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