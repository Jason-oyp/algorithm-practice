/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const set = new Set()
    let temp = headA
    while (temp) {
        set.add(temp)
        temp = temp.next
    }
    temp = headB
    while (temp) {
        if (set.has(temp)) {
            return temp
        }
        temp = temp.next
    }
    return null
};