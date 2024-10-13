class Solution:
    def isValid(self, s: str) -> bool:
        return (x := []) or not (b := {'(': ')', '{': '}', '[': ']'}) or (not (sum([1 for c in s if (c not in b or x.append(b[c])) and not (x and c == x.pop())]) or x))

# Test the Solution class
if __name__ == "__main__":
    solution = Solution()
    
    # Test cases
    test_cases = ["()", "()[]{}", "(]", "([)]", "{[]}", "", "[", "]"]
    for case in test_cases:
        print(f"Input: {case}, Output: {solution.isValid(case)}")