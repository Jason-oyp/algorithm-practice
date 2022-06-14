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
var sumOfLeftLeaves = function (root) {
  function _sum(root, num) {
    if (!root) return num;
    const leftSum =  _sum(root.left, num + (root.left && root.left.left === null && root.left.right === null ? root.left.val : 0))
    return _sum(root.right, leftSum);
  }
  return _sum(root, 0);
};
