/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.85%)
 * Likes:    1477
 * Dislikes: 1394
 * Total Accepted:    504.9K
 * Total Submissions: 1.5M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var ret = ""
    if (strs.length == 0) {
        return ret
    }
    loop1:
    for (var i = 0; i < strs[0].length; i++) {
        loop2:
        for (var j = 0; j < strs.length; j++) {
            if (strs[j][i] != strs[0][i]) {
                break loop1
            }
            if (j == strs.length - 1) {
                ret += strs[0][i]
            }
        }
    }
    return ret
};

// console.log(longestCommonPrefix(["1234", "12", "124"]))
