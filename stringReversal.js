/**
 * given a string
 * reverse it
 * reverse ('apple') === 'elppa'
 * reverse ('Greetigs!')='!sgniteerG'
 */

/** solution 1
 *  1. given string - convert it into array
 *  2. reverse it the array
 *  3. turn the array back into string
 */

let string = "Marcel"

function reverseString(string) {
    let reversedString = string.split('');
    for (let i = 0; i < string.length; i++) {
        reversedString[i] = string[string.length - 1 - i];
    }
    return (reversedString.join('')).toLowerCase();
}

console.log(reverseString(string));

/** solution 2
 *  1. given string - create empty string
 *  2. loop through each character
 *  3. return the reversed
 */

let string2 = "Apple";
let reversedString = string2.split('')
let reversedString2 = reverseString.forEach(element => {
    element = reversedString2[element + string2.length]
});

console.log(reversedString2)