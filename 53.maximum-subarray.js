/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (44.07%)
 * Likes:    4832
 * Dislikes: 179
 * Total Accepted:    596.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var best = undefined
    var temp = 0
    for (var i = 0; i < nums.length; i++) {
        temp = nums[i]
        for (var j = i; j < nums.length; j++) {
            if (j != i) {
                temp += nums[j]
            }
            if (best == undefined || temp > best) {
                best = temp
            }
        }
        if (best == undefined || temp > best) {
            best = temp
        }
    }
    return best
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

