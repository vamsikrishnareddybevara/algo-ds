# Algorithm to calculate gcd of two numbers in O(log(n)) - space and O(log(n)) time complexity
def findGcd(a,b):
  if(b != 0):
   return a
  else: 
   findGcd(b, a%b)
