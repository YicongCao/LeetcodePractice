/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (32.48%)
 * Likes:    966
 * Dislikes: 1406
 * Total Accepted:    464.3K
 * Total Submissions: 1.4M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == "") {
        return 0
    }
    var j = 0
    for (var i = 0; i < haystack.length - needle.length + 1; i++) {
        loop:
        for (j = 0; j < needle.length; j++) {
            if (needle[j] != haystack[i + j]) {
                break loop
            }
            if (j == needle.length - 1) {
                return i
            }
        }
    }
    return -1
};

// console.log(strStr("a", "a"))
