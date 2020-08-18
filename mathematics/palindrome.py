# Algorithm to determine whether a given number is palindrome or not in O(n) - space and time complexity
def palindrome(n):
  temp = n
  rev = 0
  while(n > 0):
    rem = n % 10
    rev = rev*10 + rem
    n = n // 10
  
  if(rev == temp):
    return True
  return False
