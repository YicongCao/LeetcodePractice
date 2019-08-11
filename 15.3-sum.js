/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (24.40%)
 * Likes:    4201
 * Dislikes: 480
 * Total Accepted:    602.9K
 * Total Submissions: 2.5M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var triplets = []
    var appendTriplets = (threes) => {
        threes.sort()
        for (var i = 0; i < triplets.length; i++) {
            if (triplets[i][0] == threes[0] && triplets[i][1] == threes[1] && triplets[i][2] == threes[2]) {
                return
            }
        }
        triplets.push(threes)
    }
    nums.sort((a, b) => a - b)
    const len = nums.length
    for (var i = 0; i < nums.length; i++) {
        var target = nums[i]
        var low = i + 1, high = len - 1
        while (low < high) {
            if (nums[low] + nums[high] + target == 0) {
                appendTriplets([target, nums[low], nums[high]])
                do {
                    low++
                } while (nums[low] == nums[low - 1])
            }
            else if (nums[low] + nums[high] < 0 - target) {
                low++
            } else {
                high--
            }
        }
    }
    return triplets
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([-1, 0, 1, 0]))
