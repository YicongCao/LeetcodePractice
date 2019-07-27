/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.41%)
 * Likes:    2310
 * Dislikes: 3549
 * Total Accepted:    748.1K
 * Total Submissions: 2.9M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var digits = []
    var ret = 0
    while (Math.abs(x) >= 10) {
        digits.push(x % 10)
        x = (x - x % 10) / 10
    }
    digits.push(x)
    //console.log(digits)
    for (var i = 0; i < digits.length; i++) {
        var step = digits[i] * Math.pow(10, digits.length - i - 1)
        //console.log("step:", step)
        ret += step
    }
    if (ret > Math.pow(2, 31) - 1 || ret < (0 - Math.pow(2, 31))) {
        return 0
    }
    return ret
};

