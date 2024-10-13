        # While there are at least two more nodes to swap
        while prev.next and prev.next.next:
            first = prev.next
            second = prev.next.next
            # Swap the pair
            first.next = second.next
            # Move prev two steps forward
            prev = first
        
