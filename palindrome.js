// find palindromes
// palindrome ("abba") === true
// palindrome ("abcdefg") === false

/*
1. reverse the string
2. check with original if they are same
 */

const isPalindrome = (str) => {
    const isPalindrome = str.split("").reverse().join("");
    console.log(str === isPalindrome);
}

isPalindrome("abbs");


(function(str) {
    let reversed = '';
    for (let x of str) {
        reversed = x + reversed;
    }
    console.log(str === reversed);
})("david")