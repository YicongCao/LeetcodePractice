/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 *
 * https://leetcode.com/problems/string-to-integer-atoi/description/
 *
 * algorithms
 * Medium (14.73%)
 * Likes:    1022
 * Dislikes: 6406
 * Total Accepted:    392.2K
 * Total Submissions: 2.7M
 * Testcase Example:  '"42"'
 *
 * Implement atoi which converts a string to an integer.
 * 
 * The function first discards as many whitespace characters as necessary until
 * the first non-whitespace character is found. Then, starting from this
 * character, takes an optional initial plus or minus sign followed by as many
 * numerical digits as possible, and interprets them as a numerical value.
 * 
 * The string can contain additional characters after those that form the
 * integral number, which are ignored and have no effect on the behavior of
 * this function.
 * 
 * If the first sequence of non-whitespace characters in str is not a valid
 * integral number, or if no such sequence exists because either str is empty
 * or it contains only whitespace characters, no conversion is performed.
 * 
 * If no valid conversion could be performed, a zero value is returned.
 * 
 * Note:
 * 
 * 
 * Only the space character ' ' is considered as whitespace character.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. If the numerical
 * value is out of the range of representable values, INT_MAX (2^31 − 1) or
 * INT_MIN (−2^31) is returned.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "42"
 * Output: 42
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "   -42"
 * Output: -42
 * Explanation: The first non-whitespace character is '-', which is the minus
 * sign.
 * Then take as many numerical digits as possible, which gets 42.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "4193 with words"
 * Output: 4193
 * Explanation: Conversion stops at digit '3' as the next character is not a
 * numerical digit.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "words and 987"
 * Output: 0
 * Explanation: The first non-whitespace character is 'w', which is not a
 * numerical 
 * digit or a +/- sign. Therefore no valid conversion could be performed.
 * 
 * Example 5:
 * 
 * 
 * Input: "-91283472332"
 * Output: -2147483648
 * Explanation: The number "-91283472332" is out of the range of a 32-bit
 * signed integer.
 * Thefore INT_MIN (−2^31) is returned.
 * 
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = 0 - Math.pow(2, 31)
    const digitmap = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    }
    var sign = 1
    var digits = []
    var ret = 0
    for (var i = 0; i < str.length; i++) {
        // 找到数字部分了
        if (digits.length > 0) {
            if (digitmap[str[i]] != undefined) {
                digits.push(digitmap[str[i]])
            } else {
                break
            }
        }
        // 在数字部分之外
        else {
            if (str[i] == "-") {
                sign = -1
                digits.push(0)
            } else if (str[i] == "+") {
                sign = 1
                digits.push(0)
            } else if (str[i] == " ") {
                // do nothing
            } else if (digitmap[str[i]] != undefined) {
                digits.push(digitmap[str[i]])
            } else {
                return 0
            }
        }
    }
    for (var j = 0; j < digits.length; j++) {
        ret += digits[j] * Math.pow(10, digits.length - j - 1)
    }
    ret *= sign
    if (ret < INT_MIN) {
        return INT_MIN
    } else if (ret > INT_MAX) {
        return INT_MAX
    }
    return ret
};