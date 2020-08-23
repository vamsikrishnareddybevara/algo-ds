# Algorithm to print all prime numbers upto a number n in O(1) - space and O(n*log(log(n))) time complexity

def printAllPrimeNums(n):
  list = [True]*n
  for (i, val) in enumerate(list[2:],start = 2):
    if(list[i]):
      for i in range(i**2, n+1, i):
        list[i] = False
  
  for (i, val) in enumerate(list[2:], start = 2):
    if(list[i]):
      print(i)

printAllPrimeNums(37)
