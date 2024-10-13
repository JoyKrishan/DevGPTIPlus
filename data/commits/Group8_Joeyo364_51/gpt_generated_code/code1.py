import random
import math

x = random.uniform(1, 10)
y = random.uniform(1, 10)

result = x * y + (x / y + x - y / x - y)
print(result)