#include <iostream>
#include <vector>

using std::vector;
  
#include <algorithm>

int maxSubArray(vector<int>& nums) {    
    return solve(nums, 0, false);
}
int solve(vector<int>& A, int i, bool mustPick) {
    // our subarray must contain atleast 1 element. If mustPick is false at end means no element is picked and this is not valid case
    if(i >= size(A)) return mustPick ? 0 : -1e5;       
    if(mustPick)
        return std::max(0, A[i] + solve(A, i+1, true));                  // either stop here or choose current element and recurse
    return std::max(solve(A, i+1, false), A[i] + solve(A, i+1, true));   // try both choosing current element or not choosing
}