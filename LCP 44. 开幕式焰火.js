/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {
  const set = new Set();
  function _dfs(root) {
    if (!root) return;
    set.add(root.val);
    _dfs(root.left);
    _dfs(root.right);
  }
  _dfs(root);
  return set.size;
};
