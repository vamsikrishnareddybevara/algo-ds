function runningTime(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        let pos = i;
        while (arr[pos] < arr[pos - 1] && pos > 0) {
            let temp = arr[pos - 1];
            arr[pos - 1] = arr[pos];
            arr[pos] = temp;
            pos--;
            count++;
        }
    }
    return count;

}