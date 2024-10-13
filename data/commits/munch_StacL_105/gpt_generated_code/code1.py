class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Create dummy head
        dummy = ListNode(0, head)
        
        prev = dummy
        
        # While there are at least two more nodes to swap
        while prev.next and prev.next.next:
            first = prev.next
            second = prev.next.next
            
            # Swap the pair
            prev.next = second
            first.next = second.next
            second.next = first
            
            # Move prev two steps forward
            prev = first
        
        return dummy.next