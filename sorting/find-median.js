// Complete the findMedian function below.
function findMedian(arr) {
    arr.sort((a, b) => a - b);
    return arr[Math.floor(arr.length/2)];

}