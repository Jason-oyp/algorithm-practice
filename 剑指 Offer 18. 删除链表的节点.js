/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  const curHead = head;
  if (head.val === val) {
    return head.next;
  }
  while (head) {
    const next = head.next;
    if (next && next.val === val) {
      head.next = next.next;
      return curHead;
    }
    head = next;
  }
};
