/*
242. Valid Anagram
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:

    Input: s = "rat", t = "car"

    Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    // Same pattern as findUnique - count frequencies!
    const charCount = new Map();

    // Count characters in string s
    for (const char of s) {
        const count = charCount.get(char) ?? 0;
        charCount.set(char, count + 1);
    }

    // Subtract characters from string t
    for (const char of t) {
        const count = charCount.get(char) ?? 0;
        if (count === 0) {
            return false;
        }
        charCount.set(char, count - 1);
    }

    return true; // All characters matched perfectly
};