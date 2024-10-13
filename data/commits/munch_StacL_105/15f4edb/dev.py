from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Create dummy head
        dummy = ListNode(0, head)
        
        prev = dummy
        curr = head
        
        # while the current and current's next (a pair exists)
        while curr and curr.next:
            nextPair = curr.next.next
            first = curr
            second = curr.next
            
            # rotate pair
            prev.next = second
            first.next = nextPair
            second.next = first
            
            # increment 
            prev = curr
            curr = nextPair
        return dummy.next

def main():
    # Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
    head = ListNode(1)
    head.next = ListNode(2)
    head.next.next = ListNode(3)
    head.next.next.next = ListNode(4)
    head.next.next.next.next = ListNode(5)

    # Create an instance of the Solution class
    solution = Solution()

    # Call the swapPairs method
    new_head = solution.swapPairs(head)

    # Print the resulting linked list
    while new_head:
        print(new_head.val, end=" -> ")
        new_head = new_head.next
    print("None")

if __name__ == "__main__":
    main()