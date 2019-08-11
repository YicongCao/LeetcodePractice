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
    var negative = []
    var positive = []
    for (var i = 0; i < nums.length; i++) {
        nums[i] >= 0 ? positive.push(nums[i]) : negative.push(nums[i])
    }
    var negsets = []
    var poscache = {}

    var findcombination = (src, dst, cache) => {
        for (var i = 0; i < src.length; i++) {
            for (var j = i; j < src.length; j++) {
                var rst = i == j ? [src[i]] : [src[i], src[j]]
                var sum = i == j ? src[i] : src[i] + src[j]
                if (dst) {
                    dst.push(rst)
                }
                if (cache) {
                    cache[sum] != undefined ? cache[sum].push(rst) : cache[sum] = [rst]
                }
            }
        }
    }
    findcombination(negative, negsets, undefined)
    findcombination(positive, undefined, poscache)
    var comparearray = (arr1, arr2) => {
        arr1.sort()
        arr2.sort()
        if (arr1.length == arr2.length
            && arr1.every(function (u, i) {
                return u === arr2[i];
            })
        ) {
            return true
        } else {
            return false
        }
    }
    var indexOf = (ary, elem) => {
        for (var i = 0; i < ary.length; i++) {
            if (comparearray(ary[i], elem)) {
                return i
            }
        }
        return -1
    }
    negsets = negsets.filter((elem, pos) => { return indexOf(negsets, elem) == pos })
    for (var key in poscache) {
        poscache[key] = poscache[key].filter((elem, pos) => { return indexOf(poscache[key], elem) == pos })
    }
    var sum = (ary) => {
        var ret = 0
        for (var i = 0; i < ary.length; i++) {
            ret += ary[i]
        }
        return ret
    }
    for (var i = 0; i < negsets.length; i++) {
        var val = 0 - sum(negsets[i])
        if (poscache[val] != undefined) {
            for (var j = 0; j < poscache[val].length; j++) {
                if (negsets[i].length + poscache[val][j].length == 3) {
                    triplets.push(negsets[i].concat(poscache[val][j]))
                }
            }
        }
    }
    var count = (ary, elem) => {
        var counter = 0
        for (var i = 0; i < ary.length; i++) {
            if (elem == ary[i]) {
                counter++
            }
        }
        return counter
    }
    if (count(nums, 0) >= 3) {
        triplets.push([0, 0, 0])
    }
    return triplets
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([-1, 0, 1, 0]))
// console.log(threeSum([-13, 10, 11, -3, 8, 11, -4, 8, 12, -13, 5, -6, -4, -2, 12, 11, 7, -7, -3, 10, 12, 13, -3, -2, 6, -1, 14, 7, -13, 8, 14, -10, -4, 10, -6, 11, -2, -3, 4, -13, 0, -14, -3, 3, -9, -6, -9, 13, -6, 3, 1, -9, -6, 13, -4, -15, -11, -12, 7, -9, 3, -2, -12, 6, -15, -10, 2, -2, -6, 13, 1, 9, 14, 5, -11, -10, 14, -5, 11, -6, 6, -3, -8, -15, -13, -4, 7, 13, -1, -9, 11, -13, -4, -15, 9, -4, 12, -4, 1, -9, -5, 9, 8, -14, -1, 4, 14]))

