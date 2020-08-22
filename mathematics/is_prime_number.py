# Algorithm to check if a given number is prime or not in O(1) - space and O(n**1.5) time complexity
import math  
def isPrime(a):
  if(a == 1): return False
  if(a==2 | a == 3): return True
  if(a%2 ==0): return False
  if(a % 3 == 0): return False
  for i in range (5, int(math.sqrt(a))+1, 6):
    if (a%i == 0 | a % (i+2)):
      return False
  return True
