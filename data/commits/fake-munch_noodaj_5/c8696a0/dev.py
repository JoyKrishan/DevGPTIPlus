        """
        Calculate the minimum number of operations needed to make all elements
        of the given list nums have the same value. An operation involves
        incrementing or decrementing an element by 1.

        Args:
            nums (List[int]): The input list of integers.

        Returns:
            int: The minimum number of operations required. Returns -1 if it's
            not possible to make all elements equal.
        """
        # Handle the special case where the array length is 2 and both elements are equal