// Complete the superReducedString function below.
function superReducedString(s) {
    let ar = s.split('');
    let i = 1;
    while (ar.length > 0 && i <= ar.length - 1) {
        if (ar[i] === ar[i - 1]) {
            ar.splice(i - 1, 2);
            i--;
        }
        else i++;
    }
    return (ar.length === 0) ? 'Empty String' : ar.join('');
}
