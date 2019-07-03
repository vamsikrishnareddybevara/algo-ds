// Complete the marsExploration function below.
function marsExploration(s) {
    let ar = s.match(/.{1,3}/g);
    let count = 0;
    let correct = ['S', 'O', 'S'];
    ar.forEach((val) => {
        for (let i = 0; i < 3; i++) {
            if (correct[i] !== val[i]) count++;
        }
    })
    return count;
}