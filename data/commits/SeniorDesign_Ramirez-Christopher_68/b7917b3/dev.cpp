/*old code
}
*/

//code refactored by chatgbt
#include <iostream>
#include <vector>

using std::vector;
  
#include <algorithm>

int maxSubArray(std::vector<int>& nums) {
    int n = nums.size();
    
    if (n == 0) {
        // Handle the case when the input vector is empty
        return 0;
    }

    int maxSum = nums[0];
    int currentSum = nums[0];

    for (int i = 1; i < n; ++i) {
        // Choose between extending the current subarray or starting a new one
        currentSum = std::max(nums[i], currentSum + nums[i]);
        
        // Update the maximum subarray sum
        maxSum = std::max(maxSum, currentSum);
    }

    return maxSum;
}