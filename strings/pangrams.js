// Complete the pangrams function below.
function pangrams(s) {
    let uniqueArray = [... new Set(s.split(' ').join('').toLowerCase().split(''))];
    if (uniqueArray.length === 26) return 'pangram'
    else return 'not pangram'

}
