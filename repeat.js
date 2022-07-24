// find if there's repeated values


str = "fdjiasçfasldkfjçasdfkasd";

function isRepeated(thing) {
    thing = thing.split("").sort();
    let repeatedValues = [];
    for (char in thing) {
        if (thing[char] == thing[char + 1]) {
            repeatedValues[char] = {
                char: 1
            };
        }
    }
    return repeatedValues;
}

console.log(isRepeated(str))