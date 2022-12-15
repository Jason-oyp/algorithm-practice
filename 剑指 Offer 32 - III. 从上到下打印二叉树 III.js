/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  if (!root) {
    return result;
  }

  const nodes = [];
  nodes.push(root);
  root.level = 0;
  while (nodes.length) {
    const node = nodes.shift();
    const level = node.level;
    result[level] = result[level] || [];

    result[level].push(node.val);
    if (node.left) {
      node.left.level = level + 1;
      nodes.push(node.left);
    }
    if (node.right) {
      node.right.level = level + 1;
      nodes.push(node.right);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (i & 1) {
      result[i].reverse();
    }
  }
  return result;
};
