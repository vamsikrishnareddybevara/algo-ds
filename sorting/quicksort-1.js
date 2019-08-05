// Complete the quickSort function below.
function quickSort(arr) {
    let p = arr[0];
    let sorted = [];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        (arr[i] > p) ? right.push(arr[i]) : left.push(arr[i]);
    }
        
    sorted.push(...left);
    sorted.push(p);
    sorted.push(...right);

    return (sorted)
    
}