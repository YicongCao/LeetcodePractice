/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (31.46%)
 * Likes:    5583
 * Dislikes: 1439
 * Total Accepted:    947.8K
 * Total Submissions: 3M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // var printlist = function (l) {
    //     var digits = []
    //     var ret = 0
    //     while (l != null) {
    //         digits.push(l.val)
    //         l = l.next
    //     }
    //     for (var i = 0; i < digits.length; i++) {
    //         ret += digits[i] * Math.pow(10, i)
    //     }
    //     return ret
    // }
    // console.log("l1:", printlist(l1))
    // console.log("l2:", printlist(l2))
    var ret = {
        val: 0,
        next: null
    }
    var cur = ret
    var borrow = 0
    var a = 0, b = 0
    while (l1 != null || l2 != null || borrow != 0) {
        a = l1 != null ? l1.val : 0
        b = l2 != null ? l2.val : 0
        if (a + b + borrow >= 10) {
            cur.val = a + b - 10 + borrow
            borrow = 1
        } else {
            cur.val = a + b + borrow
            borrow = 0
        }
        l1 = l1 != null ? l1.next : null
        l2 = l2 != null ? l2.next : null
        if (l1 != null || l2 != null || borrow != 0) {
            cur.next = { ret: 0, next: null }
            cur = cur.next
        }
    }
    // console.log("ret:", printlist(ret))
    return ret
};

// var l1 = {
//     val: 2,
//     next: {
//         val: 4,
//         next: {
//             val: 3,
//             next: null
//         }
//     }
// }

// var l2 = {
//     val: 5,
//     next: {
//         val: 6,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// }

// var l1 = { val: 5, next: null }
// var l2 = { val: 5, next: null }

// var l1 = { val: 9, next: null }
// var l2 = {
//     val: 1,
//     next: {
//         val: 9,
//         next: {
//             val: 9,
//             next: null
//         }
//     }
// }

// console.log(addTwoNumbers(l1, l2))
