// Complete the minimumNumber function below.
function minimumNumber(n, pass) {
    const noOFRegexPassed = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#\$%\^&\*\(\)\+\-]/]
        .map(regex => regex.test(pass))
        .filter(Boolean).length;
    return Math.max(4 - noOFRegexPassed, 6 - n);
}