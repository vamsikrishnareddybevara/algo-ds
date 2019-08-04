// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    let change = false;
    for (let i = 1; i < arr.length; i++) {
        let pos = i;
        while (arr[pos] < arr[pos - 1] && pos > 0) {
            change = true;
            let temp = arr[pos - 1];
            arr[pos - 1] = arr[pos];
            arr[pos] = temp;
            pos--;
        }
        console.log(arr.join(' '));   
    }
}