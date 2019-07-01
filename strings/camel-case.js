// Complete the camelcase function below.
function camelcase(s) {
    let length = s.length;
    let i = 0;
    let count = 1;
    while (i < length) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            count++;
        }
        i++;
    }
    return count;
}