function countingSort(arr) {
    let zeroArray = Array(100).fill(0);
    arr.forEach((val) => {
        zeroArray[val]++;
    })
    let sortedArray = [];
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < zeroArray[i]; j++) {
            sortedArray.push(i);
        }
    }
    return sortedArray;
}
