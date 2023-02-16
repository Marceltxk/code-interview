let name = "Marcel"

function invertString(word) {
    let invertedString = word.split('');
    for (let i = 0; i < invertedString.length; i++) {
        invertedString[i] = word[word.length - 1 - i];
    }
    return (invertedString.join('')).toLowerCase();
}

console.log(invertString("Marcel"));
