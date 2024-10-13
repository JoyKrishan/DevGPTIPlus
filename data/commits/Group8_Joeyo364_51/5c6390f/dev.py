""" Original code:
import random
import math

x = math.ceil(random.random() * 10)
y = math.ceil(random.random() * 10)

result = x*y + (x/y+x - y/x-y)
print(result)



ChatGPT enhanced code: """
import random
import math

x = random.uniform(1, 10)
y = random.uniform(1, 10)

result = x * y + (x / y + x - y / x - y)
print(result)