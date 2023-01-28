/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
      continue;
    }
    return false;
  }
  return true;
};
