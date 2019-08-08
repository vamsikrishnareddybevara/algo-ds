// Complete the closestNumbers function below.
function closestNumbers(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let min = arr[1] - arr[0];
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff < min) {
            min = diff;
        }
    }
    
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let m = arr[i];
        let n = arr[i - 1];
        let diff = m - n;
        if (diff === min) {
            result.push(n, m);
        }
    }
    console.log(result)
    return result;
}
