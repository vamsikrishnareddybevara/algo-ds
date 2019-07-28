// Complete the beautifulBinaryString function below.
function beautifulBinaryString(b) {
    let ar = b.split('');
    let count = 0;
    for (let i = 0; i < ar.length-2; i++) {
        if (ar[i] === '0' && ar[i + 1] === '1' && ar[i + 2] === '0') {
            i += 2;
            count++;
        }
    }
    return count;
}