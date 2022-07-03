/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  const maxs = [];
  for (let i = 0; i < root.children.length; i++) {
    maxs.push(maxDepth(root.children[i]));
  }
  if (maxs.length === 0) return 1;
  return Math.max(...maxs) + 1;
};


// 之后试试广搜