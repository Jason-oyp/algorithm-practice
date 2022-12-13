/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const bucket = [];
  bucket.push(root);
  while (bucket.length > 0) {
    const node = bucket.shift();
    result.push(node.val);
    if (node.left) {
      bucket.push(node.left);
    }
    if (node.right) {
      bucket.push(node.right);
    }
  }
  return result;
};
