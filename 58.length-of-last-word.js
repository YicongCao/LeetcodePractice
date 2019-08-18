/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.27%)
 * Likes:    413
 * Dislikes: 1745
 * Total Accepted:    288.6K
 * Total Submissions: 893.8K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 * 
 * Example:
 * 
 * 
 * Input: "Hello World"
 * Output: 5
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    var length = 0
    s = s.trim()
    for (var i = s.length; i--; i != 0) {
        if (s[i] == ' ') {
            return length
        } else {
            length++
        }
    }
    return length
};

// console.log(lengthOfLastWord('hello world'))