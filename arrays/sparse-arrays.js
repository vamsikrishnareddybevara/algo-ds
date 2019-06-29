// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    let result = [];
    function noOfMatchings(query) {
        let count = 0;
        for (let string of strings) {
            if (string === query) count++;
        }
        return count;
    }
    for (let query of queries) {
        result.push(noOfMatchings(query));
    }
    return result;
}