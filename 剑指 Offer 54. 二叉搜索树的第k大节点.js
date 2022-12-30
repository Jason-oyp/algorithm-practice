/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const arr = [];
  function dfs(root) {
    if (!root) {
      return;
    }
    dfs(root.left);
    arr.push(root.val);
    dfs(root.right);
  }
  dfs(root);
  return arr[arr.length - k];
};
