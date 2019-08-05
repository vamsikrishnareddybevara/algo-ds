function countingSort(arr) {
    let zeroArray = Array(100).fill(0);
    arr.forEach((val) => {
        zeroArray[val]++;
    })
    return(zeroArray);
}
