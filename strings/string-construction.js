// Complete the stringConstruction function below.
function stringConstruction(s) {
    let unique = [... new Set(s)];
    return unique.length;

}