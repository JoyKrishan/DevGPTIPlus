Math Forumulas:
1. Find the number of multiples of 3 or 5 below 'n' - 1.
    (n-1)/3 = number of multiples of 3 below n
    (n-1)/5 = number of multiples of 5 below n
2. Calculate the sum of multiples of 3 or 5 using the formula for sum of an arithmetic series (Little Guass formula)
    sum = (n * (n + 1))/2
3. Adjust for multiples of both 3 and 5 (15) by subtracting the sum of multiples of 15.
    find the number of multiples of 15 below n - 1
        (n-1)/15 = number of multiples of 15 below n
    sum -= (15 * temp * (temp + 1))/2 in order to exclude the sum of multiples of 15.
