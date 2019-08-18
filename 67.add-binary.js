/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (39.85%)
 * Likes:    1097
 * Dislikes: 210
 * Total Accepted:    327.2K
 * Total Submissions: 815.7K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const binaryMap = {
        "1": 1,
        "0": 0
    }
    var i = a.length - 1
    var j = b.length - 1
    var digits = []
    var borrow = 0
    while (i >= 0 || j >= 0) {
        var va = a[i] != undefined ? binaryMap[a[i]] : 0
        var vb = b[j] != undefined ? binaryMap[b[j]] : 0
        if (va + vb + borrow >= 2) {
            digits.push(va + vb + borrow - 2)
            borrow = 1
        } else {
            digits.push(va + vb + borrow)
            borrow = 0
        }
        i--
        j--
    }
    if (borrow > 0) {
        digits.push(borrow)
    }
    digits.reverse()
    return digits.join('')
};

// console.log(addBinary("1010", "1011"))
