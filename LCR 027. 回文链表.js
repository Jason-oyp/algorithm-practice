/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let s = ''
    while (head) {
        s += head.val
        head = head.next
    }
    let left = 0,
        right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
};