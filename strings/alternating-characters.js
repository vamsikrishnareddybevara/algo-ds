function alternatingCharacters(s) {
    const arr = s.split('')
    let deleted = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) deleted++
    }
    return deleted
}