// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
    let weightArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    let object = {};
    let weight = weightArray[s.charCodeAt(0) - 97];
    object[weight] = 'true';
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            weight += weightArray[s.charCodeAt(i) - 97];
            object[weight] = true;
        } else {
            weight = weightArray[s.charCodeAt(i) - 97];
            console.log(s.charCodeAt(i))
            object[weight] = true;
        }
    }
    let array = [];
    for (let query of queries) {
        if (object[query]) array.push('Yes');
        else array.push('No');
    }
    return array;
}