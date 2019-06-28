// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let sum, maxSum;
    for (let row = 1; row < arr.length - 1; row++) {
        for (let col = 1; col < arr[0].length - 1; col++) {
            if (row === 1 && col === 1) {
                maxSum = arr[1][1] + arr[0][1] + arr[0][0] + arr[0][2] + arr[2][1] + arr[2][0] + arr[2][2];
            }
            sum = arr[row][col] + arr[row - 1][col] + arr[row + 1][col] + arr[row - 1][col - 1] + arr[row - 1][col + 1] + arr[row + 1][col - 1] + arr[row + 1][col + 1];
            if (sum > maxSum) {
                maxSum = sum;
            }

        }

    }
    return maxSum;
}
// Alternatively an array can be used to store all the sums and return the maximum value from it.But, considering the space complexity i used this approach to compare the sum value in each iteration