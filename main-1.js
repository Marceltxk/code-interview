/*

Input:
"cat", "car", "bar"

function setup(input)

function isInDict(word)

setup(["cat", "car", "bar"])
isInDict("cat") //true
isInDict("bat") //false


 */

class Dictionary {
    constructor(wordsArray) {
        this.dict = new Set(wordsArray);
    }

    isInDict(word) {
        return this.dict.some((dictWord) => {
            const regexTemplate = word.replace("*", ".");
            const regex = new RegExp(`^${regexTemplate}$`);
            return regex.test(dictWord);
        })

        return this.dict.has(word);
    }
}

const test = new Dictionary(['cat', 'car', 'bar']);

console.log(test.isInDict('cat')); //true
console.log(test.isInDict('don')) //false