/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  if (Math.abs(dfs(root.left) - dfs(root.right)) <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  }
  return false;
};
function dfs(root) {
  if (!root) {
    return 0;
  }
  return Math.max(dfs(root.left), dfs(root.right)) + 1;
}
