// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    let counter = 0;
    let unique = [... new Set(s)];
    let dif = 0;
    let odd = 0;
    for (let i = 0; i <= unique.length; i++) {
        for (let j = 0; j <= s.length; j++) {
            if (unique[i] === s[j]) {
                counter++
            }
        }
        if (counter === 1) dif++;
        if (counter % 2 !== 0) odd++;
        counter = 0;
    }
    return dif > 1 || odd > 1 ? "NO" : "YES"
}
