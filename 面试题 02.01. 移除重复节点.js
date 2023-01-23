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
var removeDuplicateNodes = function (head) {
  const set = new Set();
  if (!head) {
    return head;
  }
  const result = head;
  let prev = null;
  while (head) {
    const val = head.val;
    const next = head.next;
    if (set.has(val)) {
      prev.next = next;
    } else {
      set.add(val);
      prev = head;
    }
    head = next;
  }
  return result;
};
