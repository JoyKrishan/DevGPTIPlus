class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        """
        Removes the nth node from the end of a singly-linked list.

        Args:
            head (Optional[ListNode]): The head pointer of the linked list.
            n (int): The position of the node to remove from the end of the list.

        Returns:
            Optional[ListNode]: The head pointer of the linked list after removal.
        """

        # Creating a dummy head node to handle edge cases
        head_ptr = ListNode(next=head)

        # Initialize fast and slow pointers
        fast = head_ptr
        slow = head_ptr

        # Move fast pointer to the n+1-th node from the beginning
        for i in range(n):
            fast = fast.next

        # Move both pointers until fast pointer reaches the end
        while fast.next:
            slow = slow.next
            fast = fast.next

        # Check if the node to remove is the head node
        if head == slow.next:
            head = head.next
        else: 
            # Remove the nth node from the end
            slow.next = slow.next.next

        return head