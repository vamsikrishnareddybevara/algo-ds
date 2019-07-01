// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let alphaRegex = /[a-zA-Z]/;
    let ar = s.split('');
    for (let i = 0; i < ar.length; i++) {
        if (alphaRegex.test(ar[i])) {
            if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ar[i] = lowerCase[(lowerCase.indexOf(ar[i]) + k) % 26];
            else ar[i] = upperCase[(upperCase.indexOf(ar[i]) + k) % 26];   
        }
    }
    return ar.join('');
}