# Algorithm to calculate trailing zeroes of factorial of a number in O(1) - space and O(log(n) time complexity
def trailingZeroes(n):
  res = 0
  i = 5
  while (n > 0):
    res = res + n // i
    n = n // i
    i = i * 5
  return res
