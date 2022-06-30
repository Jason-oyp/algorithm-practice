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
var getMinimumDifference = function (root) {
  let result = Number.MAX_VALUE,
    num;
  function _test(root) {
    if (!root) return;
    _test(root.left);
    handle(root.val);
    _test(root.right);
  }
  _test(root);
  function handle(val) {
    if (typeof num === "number") {
      if (val - num < result) {
        result = val - num;
      }
    }
    num = val;
  }

  return result;
};
