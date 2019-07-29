/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.63%)
 * Likes:    5928
 * Dislikes: 339
 * Total Accepted:    1M
 * Total Submissions: 3.5M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var lastSub = ""
    var currSub = ""
    for (var i = 0; i < s.length; i++) {
        if (currSub.indexOf(s[i]) >= 0) {
            lastSub = lastSub.length > currSub.length ? lastSub : currSub
            i -= currSub.length
            currSub = ""
        } else {
            currSub += s[i]
        }
    }
    // console.log("lastSub:", lastSub)
    // console.log("currSub:", currSub)
    return lastSub.length > currSub.length ? lastSub.length : currSub.length
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
