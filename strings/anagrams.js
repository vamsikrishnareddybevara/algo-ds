function anagram(s) {
    const len = s.length
    if (len % 2 === 1) return -1;
    let sub1 = s.substring(0, len / 2), sub2 = s.substring(len / 2)
    let count = 0
    sub2.split('').filter(x => sub1.includes(x) ? (sub1 = sub1.replace(x, '')) : count++)
    return count
}