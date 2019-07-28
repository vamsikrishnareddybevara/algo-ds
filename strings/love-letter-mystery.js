function theLoveLetterMystery(s) {
    let count = 0;
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        count += (Math.abs(s.charCodeAt(i) - s.charCodeAt(j)));
        i++;
        j--;
    }
    return count;
}