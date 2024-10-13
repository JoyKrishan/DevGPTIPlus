class Solution:
    def isValid(self, s: str) -> bool:
        # Initialize an empty stack `x`
        stack = []
        
        # Define a dictionary `b` to store the mapping of opening and closing brackets
        brackets = {'(': ')', '{': '}', '[': ']'}
        
        # Iterate through each character in the string `s`
        for char in s:
            # If the character is an opening bracket, push it onto the stack
            if char in brackets:
                stack.append(char)
            # If the character is a closing bracket
            else:
                # If the stack is empty or the top of the stack does not match the current closing bracket, return False
                if not stack or brackets[stack.pop()] != char:
                    return False
        
        # If the stack is empty, return True (indicating all brackets were matched)
        return not stack