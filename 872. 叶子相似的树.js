/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let r1 = null;
  let r2 = null;
  let temp = [];
  function dfs(root) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      temp.push(root.val);
    }
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root1);
  r1 = temp;
  temp = [];
  dfs(root2);
  r2 = temp;
  return r1.join(" ") === r2.join(" ");
};
