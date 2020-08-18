# Algorithm to calculate factorial of a number in O(n1 - space and O(n) time complexity
def factorial(n):
  res = 1

  for i in range(2,n+1):
    res = res*i
  return res
