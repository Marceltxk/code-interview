// Given two strings s1 and s2, check if they're anagrams

s1 = "danger"
s2 = "danger"

//output: false

function areAnagrams(s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");
    if (s1.length !== s2.length) {
        return false
    }
    if (s1.sort() == s2.sort()) {
        return true
    }
    return false;
}

console.log(areAnagrams(s1, s2));