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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const map = {};
  function dfs(root, k) {
    if (!root) return false;
    if (map[root.val]) {
      return true;
    }
    map[k - root.val] = true;
    return dfs(root.left, k) || dfs(root.right, k);
  }
  return dfs(root, k);
};
