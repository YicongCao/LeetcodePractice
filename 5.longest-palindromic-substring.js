/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (27.64%)
 * Likes:    3973
 * Dislikes: 376
 * Total Accepted:    607.1K
 * Total Submissions: 2.2M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const step = 0.5
    var pivot = 0
    // var candidates = []
    var bestCandidate = ""
    var checkPalindrome = function (s) {
        var ret = ""
        var start = 0
        if (pivot % 1 == 0.5) {
            start = pivot - 0.5
        } else {
            start = pivot - 1
            ret = s[pivot]
        }
        while (start >= 0 && 2 * pivot - start < s.length) {
            if (s[start] == s[2 * pivot - start]) {
                ret = s[start] + ret + s[2 * pivot - start]
            } else {
                break
            }
            start--
        }
        return ret
    }
    for (pivot = 0; pivot < s.length; pivot += step) {
        var candidate = checkPalindrome(s)
        if (candidate != "" && candidate != undefined) {
            // candidates.push(candidate)
            if (candidate.length > bestCandidate.length) {
                bestCandidate = candidate
            }
        }
    }
    // console.log("candidates:", candidates)
    // console.log("best:", bestCandidate)
    return bestCandidate
};

// console.log(longestPalindrome("cbbd"))