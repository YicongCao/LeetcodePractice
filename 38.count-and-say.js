/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (41.17%)
 * Likes:    854
 * Dislikes: 6613
 * Total Accepted:    303.6K
 * Total Submissions: 734.3K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var ret = "1"
    var retnew = []
    for (var i = 1; i < n; i++) {
        retnew.length = 0
        var lastchar = ret[0]
        var lastcount = 1
        for (var j = 1; j <= ret.length; j++) {
            if (ret[j] == lastchar) {
                lastcount += 1
            } else {
                retnew.push([lastcount, lastchar].join(''))
                lastcount = 1
                lastchar = ret[j]
            }
        }
        ret = retnew.join('')
    }
    return ret
};

// console.log(countAndSay(6))
