/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let val = root.val;
  function dfs(root) {
    if (root === null) {
      return;
    }
    if (root.val !== val) {
      val = false;
      return false;
    }
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return val === root.val;
};
