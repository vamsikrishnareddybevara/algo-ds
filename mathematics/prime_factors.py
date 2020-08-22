# Algorithm to print prime factors of a number in O(1) - space and O(n**1.5) time complexity
import math
def printPrimeFactors(n):
  if(n <= 1): return 0
  if(n ==2 | n ==3): return n
  while (n % 2 ==0):
    print(2)
    n = n / 2
  while (n % 3 ==0 ):
    print(3)
    n = n / 3
  
  for i in range(5, int(math.sqrt(n))+ 1, 6):
    while(n % i == 0):
      print(i)
      n = n / i
    while(n % (i +2) == 0):
      print(i + 2)
      n = n / (i + 2)

  if(n > 3):
    print(n)
