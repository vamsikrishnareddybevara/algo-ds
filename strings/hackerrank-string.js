// Complete the hackerrankInString function below.
function hackerrankInString(s) {
    var stringToFind = "hackerrank";
    var foundIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === stringToFind[foundIndex]) {
            foundIndex++;
        }
        if (foundIndex === stringToFind.length - 1) {
            return "YES";
        }
    }
    return "NO";
}