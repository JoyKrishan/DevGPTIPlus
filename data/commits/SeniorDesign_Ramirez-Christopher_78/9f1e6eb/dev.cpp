class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int minFallingSum = INT_MAX;
        for (int startCol = 0; startCol < matrix.size(); startCol++) {
            minFallingSum =
                min(minFallingSum, findMinFallingPathSum(matrix, 0, startCol));
        }
        return minFallingSum;
    }

    int findMinFallingPathSum(vector<vector<int>>& matrix, int row, int col) {
        // check if we are out of the left or right boundary of the matrix
        if (col < 0 || col == matrix.size()) {
            return INT_MAX;
        }
        // check if we have reached the last row
        if (row == matrix.size() - 1) {
            return matrix[row][col];
        }

        // calculate the minimum falling path sum starting from each possible
        // next step
        int left = findMinFallingPathSum(matrix, row + 1, col);
        int middle = findMinFallingPathSum(matrix, row + 1, col + 1);
        int right = findMinFallingPathSum(matrix, row + 1, col - 1);

        return min(left, min(middle, right)) + matrix[row][col];
    }
};