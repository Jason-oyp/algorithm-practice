/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = [];
  function _bianli(root) {
    if (root === null) return;
    result.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
        _bianli(root.children[i])
    }
  }
  _bianli(root);
  return result;
};
