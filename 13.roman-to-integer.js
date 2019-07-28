/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (52.87%)
 * Likes:    1340
 * Dislikes: 2757
 * Total Accepted:    452.5K
 * Total Submissions: 855.9K
 * Testcase Example:  '"III"'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 * 
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * 
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * 
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be
 * within the range from 1 to 3999.
 * 
 * Example 1:
 * 
 * 
 * Input: "III"
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: "IV"
 * Output: 4
 * 
 * Example 3:
 * 
 * 
 * Input: "IX"
 * Output: 9
 * 
 * Example 4:
 * 
 * 
 * Input: "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    // IV: 4
    // ret: 0 -1 5-1
    // lastdigit: 0 1 5
    // digit: 1 5 n/a

    // LVIII: 50+5+3
    // ret: 0 50 50+5+1+1+1
    // lastdigit: 0 50 5 1 1 1
    // digit: 50 5 1 1 1 n/a

    // MCMXCIV: 1000+900+90+4
    // ret: 0 1000-100+1000-10+100-1+5
    // lastdigit: 0 1000 100 1000 10 100 1 5
    // digit: 1000 100 1000 10 100 1 5 n/a
    var largest = 0
    var ret = 0
    var digit = 0
    var lastdigit = 0
    // var debug_digit = []
    // var debug_last_digit = []
    // var debug_ret = ""
    for (var i = 0; i < s.length; i++) {
        digit = symbols[s[i]]
        // debug_last_digit.push(lastdigit)
        // debug_digit.push(digit)
        if (lastdigit != 0) {
            if (digit < lastdigit) {
                ret += lastdigit
                // debug_ret += "+" + String(lastdigit)
                lastdigit = digit
            } else if (digit == lastdigit) {
                lastdigit += digit
            } else {
                ret += (0 - lastdigit)
                // debug_ret += "-" + String(lastdigit)
                lastdigit = digit
            }
        } else {
            lastdigit = digit
        }
    }
    ret += lastdigit
    // debug_ret += "+" + String(lastdigit)
    // console.log("ret:", debug_ret)
    // console.log("lastdigit:", debug_last_digit)
    // console.log("digit:", debug_digit)
    return ret
};

// console.log(romanToInt("XLCDM"))