/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let newHead = null;
  let temp = null;
  while (head) {
    temp = head.next;
    head.next = newHead;
    newHead = head;
    head = temp;
  }
  return newHead;
};
