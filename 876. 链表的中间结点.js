/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const result = [];
  function dfs(head) {
    if (!head) {
      return;
    }
    result.push(head);
    dfs(head.next);
  }
  dfs(head);
  return result[Math.floor(result.length / 2)];
};


// 解法二：快慢指针
var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};