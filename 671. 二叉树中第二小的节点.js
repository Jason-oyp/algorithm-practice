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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  let result = [];
  function dfs(root) {
    if (root === null) return;
    result.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  result = [...new Set(result)];
  result.sort((a, b) => a - b);
  if (result[1] > result[0]) {
    return result[1];
  }
  return -1;
};
