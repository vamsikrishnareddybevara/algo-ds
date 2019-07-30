// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let result = 'NO'
    s1.split('').forEach(x => {
        if (s2.includes(x)) {
            result = 'YES';
        }
    })
    return result;
}