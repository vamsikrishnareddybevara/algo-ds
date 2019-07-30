// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    let count = 0
    s2.split('').filter(x => s1.includes(x) ? (s1 = s1.replace(x, ''), count++) : '')
    return s1.length + s2.length - count
}