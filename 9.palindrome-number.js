/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (44.14%)
 * Likes:    1528
 * Dislikes: 1337
 * Total Accepted:    628.4K
 * Total Submissions: 1.4M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example 1:
 * 
 * 
 * Input: 121
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 * 
 * 
 * Follow up:
 * 
 * Coud you solve it without converting the integer to a string?
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var digits = []
    if (x < 0) {
        return false
    }
    while (Math.abs(x) >= 10) {
        digits.push(x % 10)
        x = (x - x % 10) / 10
    }
    digits.push(x)
    for (var i = 0; i < digits.length / 2 + 1; i++) {
        if (digits[i] != digits[digits.length - i - 1]) {
            return false
        }
    }
    return true
};

