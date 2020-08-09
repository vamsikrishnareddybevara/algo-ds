/**
 * An algorithm to left rotate an array d times.
 * Time - O(n), Space  - O(1)
 */

function leftRotateArrayByDTimes(arr,d) {
  // O(n) - T and O(1) - S
  const n = arr.length
  reverse(arr, 0, d-1);
  reverse(arr, d, n - 1)
  reverse(arr, 0, n-1)
  return arr
}

function reverse(arr, left, right) {
  while(left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}
