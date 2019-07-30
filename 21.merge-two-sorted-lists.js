/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (48.11%)
 * Likes:    2445
 * Dislikes: 347
 * Total Accepted:    634.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
var mergeTwoLists = function (l1, l2) {
    var ret = {}
    var cur = ret
    if (l1 == null && l2 == null) {
        return null
    }
    var assign = function (flag) {
        if (flag) {
            cur.val = l1.val
            l1 = l1.next
        } else {
            cur.val = l2.val
            l2 = l2.next
        }
    }
    while (true) {
        if (l1 == null || l1.val == undefined) {
            assign(false)
        } else if (l2 == null || l2.val == undefined) {
            assign(true)
        } else {
            if (l1.val < l2.val) {
                assign(true)
            } else {
                assign(false)
            }
        }
        if (l1 != null || l2 != null) {
            cur.next = { val: undefined, next: null }
            cur = cur.next
        } else {
            break
        }
    }
    return ret
};

// var l1 = {
//     val: 2,
//     next: {
//         val: 3,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// }

// var l2 = {
//     val: 2,
//     next: {
//         val: 5,
//         next: {
//             val: 6,
//             next: null
//         }
//     }
// }

// console.log(JSON.stringify(mergeTwoLists(l1, l2)))
