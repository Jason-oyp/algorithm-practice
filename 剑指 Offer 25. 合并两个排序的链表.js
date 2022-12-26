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
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  const arr1 = [];
  while (l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  const arr2 = [];
  while (l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }
  const arr3 = [...arr1, ...arr2].sort((a, b) => a - b);
  const result = new ListNode(arr3[0]);
  p = result;
  for (let i = 1; i < arr3.length; i++) {
    p.next = new ListNode(arr3[i]);
    p = p.next;
  }
  return result;
};
