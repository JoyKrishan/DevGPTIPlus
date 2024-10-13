
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        """
        Merge two sorted linked lists into one sorted linked list.
        Args:
            l1 (ListNode): Head of the first sorted linked list.
            l2 (ListNode): Head of the second sorted linked list.
        Returns:
            ListNode: Head of the merged sorted linked list.
        """
        # Create a dummy node to hold the result
        dummy = ListNode()
        tail = dummy
        
        # Loop until either of the lists becomes empty
        while l1 and l2:
            if l1.val <= l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
        # Connect the remaining elements of the non-empty list
        tail.next = l1 if l1 else l2
        
        # Return the head of the merged list (skipping the dummy node)
        return dummy.next