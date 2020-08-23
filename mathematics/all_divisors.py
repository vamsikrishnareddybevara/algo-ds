
# Algorithm to print all divisors of a number in O(1) - space and O(n**1.5) time complexity
import math
def printAllDivisors(n):
  
  for i in range (1,int(math.sqrt(n))+ 1):
    if(n % i == 0):
      print(i)
  for i in range (i,0, -1):
    if(n % i == 0): 
      print(n//i) 

