def josephus(n, k):
    survivor = 0  # Index of the survivor
    for i in range(2, n + 1):
        survivor = (survivor + k) % i
    return survivor + 1  # Adding 1 to convert index to person number

n = 14  # specific n and k values for original josephus problem

# Calculate the survivor
survivor_number = josephus(n, k)

print("The survivor is person number:", survivor_number)