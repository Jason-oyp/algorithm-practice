/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = [];
  function _bianli(root) {
    if (root === null) return;
    for (let i = 0; i < root.children.length; i++) {
      _bianli(root.children[i]);
    }
    result.push(root.val);
  }
  _bianli(root);
  return result;
};
