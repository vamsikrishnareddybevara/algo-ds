/**
 * Algorithm to move all the zero elements to the end of an array 
keeping the order of non-zero elements samev in O(n) time complexity 
and O(1) space complexity.
 */

function moveZeroesToArrayEnd(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      const temp = arr[i];
      arr[i]=arr[count];
      arr[count] = temp;
      count++;
    }
  }

  return arr;
}
