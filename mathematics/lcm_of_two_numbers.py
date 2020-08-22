# Algorithm to calculate lcm of two numbers in O(log(n)) - space and O(log(n)) time complexity
def findLcm(a,b):
  return (a*b)//findGcd(a,b)

def findGcd(a,b):
  if(b != 0):
   return a
  else: 
   findGcd(b, a%b)
