def knapsack(cap, weight, value, table):
    maxVal = 0      # returns max possible value with the given capacity
    for i in range(1, len(table)):    
        for j in range(len(table[0])):
            # if weight of current item is less than current bag capacity, borrow max value from previous items
            if weight[i] > j:       
                table[i][j] = table[i-1][j]
            # else find the max value of either the value of previous items, or the inclusion of the new item
            else:
                table[i][j] = max(table[i-1][j], table[i-1][j-weight[i]] + value[i])
                maxVal = table[i][j]
    return maxVal

if __name__ == '__main__':
    cap = 10
    weight = [2, 4, 5, 6]
    value = [1, 2, 3, 5]
    # table holding maximum value for a number of items with a limited bag capacity
    table = [[0] * (cap + 1) for _ in range(len(weight))]   

    for i in range(len(value)):
        print(f"\tItem {i+1}: Value = {value[i]}, Weight = {weight[i]}")
    print(f"Highest value for a bag with a capacity of {cap}: "+str(knapsack(cap, weight, value, table)))