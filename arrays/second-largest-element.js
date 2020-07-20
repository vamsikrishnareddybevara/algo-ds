function findSecondLargestElement(arr) {
  // O(n) - T , O(1) - S
  let indexOfLargest = 0;
  let res = -1;

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > arr[indexOfLargest]){
      res = indexOfLargest;
      indexOfLargest = i;
    } else if(arr[i] !== arr[indexOfLargest]) {
       if(res === -1 || arr[i] > arr[res]){
      res = i;
      }
    }
   
  }
  return res;
}

