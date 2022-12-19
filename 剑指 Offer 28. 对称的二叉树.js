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
var isSymmetric = function (root) {
  let left = "",
    right = "";
  function test(root, type) {
    if (!root) {
      if (type === "left") {
        left += "null";
      } else {
        right += "null";
      }
      return null;
    }
    if (type === "left") {
      left += root.val;
      test(root.left, "left");
      test(root.right, "left");
    } else {
      right += root.val;
      test(root.right, "right");
      test(root.left, "right");
    }
  }
  test(root, "left");
  test(root, "right");
  return left === right;
};
