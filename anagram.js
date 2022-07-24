// Given two strings s1 and s2, check if they're anagrams

s1 = "danger"
s2 = "ballll"

//output: false

function areAnagrams(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    freq1 = {};
    freq2 = {};
    for (ch in s1) {
        if (ch in freq1) {
            freq1[ch] += 1
        }
        else {
            freq1[ch] = 1
        }
    }
    for (ch in s2) {
        if (ch in freq2) {
            freq2[ch] += 1
        }
        else {
            freq2[ch] = 1
        }
    }
    for (key in freq1) {
        if (!(key in freq2 || freq1[key] !== freq1[key])) {
            return false
        }
    }
    return true
}

console.log(areAnagrams(s1, s2));