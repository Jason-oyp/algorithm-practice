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
var findTilt = function (root) {
  let sum = 0;

  function dfs(root) {
    if (!root) return 0;
    const leftSum = dfs(root.left);
    const rightSum = dfs(root.right);
    sum += Math.abs(leftSum, rightSum);
    return leftSum + rightSum + root.val;
  }
  dfs(root);
  return sum;
};
