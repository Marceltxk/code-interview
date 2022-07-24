let person = {
    name: String,
    invert: function(word) {
        let invertedWord = word;
        for (i = 0; i < word.length; i++) {
            invertedWord[i] = word[word.length - 1 - i];
        }
        return invertedWord.join('');
    }
}


person.name = "Marcel"

console.log(person.invert("OI"))