// Complete the funnyString function below.
function funnyString(s) {
    let absDiff = [];
    for (let i = 0; i < s.length-1; i++) {
        absDiff.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)));
    }
    return (absDiff.join('') === absDiff.reverse().join('')) ? 'Funny' : 'Not Funny'
}