/**
 * An algorithm to reverse an array in O(n) time and O(1) space complexity
 */
function reverseArray(arr) {
  // O(n) - T and O(1) - S
  let low = 0;
  let high = arr.length - 1;

  while(low < high) {
    const temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
    high--
  }
  return arr; 
}
