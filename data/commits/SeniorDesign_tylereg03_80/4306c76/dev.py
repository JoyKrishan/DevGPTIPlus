def Josh(person, k, index):
  if len(person) == 1:
    print(person[0])
    return
   
  index = ((index+k)%len(person))
   
  person.pop(index)
   
  Josh(person,k,index)
 
# Driver Program to test above function
n = 14 # specific n and k  values for original josephus problem
k = 2
k-=1   # (k-1)th person will be killed
 
index = 0
 
person=[]
for i in range(1,n+1):
  person.append(i)
 
Josh(person,k,index)
 
# This code is contributed by
# Gaurav Kandel