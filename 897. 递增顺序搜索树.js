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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const newRoot = (temp = new TreeNode(0));
  function dfs(root) {
    if (root === null) return;
    dfs(root.left);
    temp.val = root.val;
    temp.right = new TreeNode(0);
    temp = temp.right;
    dfs(root.right);
  }
  dfs(root);
  let _temp = newRoot;
  while (_temp && _temp.right) {
    if (_temp.right === temp) {
      _temp.right = null;
    }
    _temp = _temp.right;
  }
  return newRoot;
};
