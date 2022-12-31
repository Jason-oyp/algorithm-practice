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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (!root) return [];
  const path = [root.val];
  const res = [];
  function dfs(node) {
    if (node.left) {
      path.push(node.left.val);
      dfs(node.left);
      path.pop();
    }
    if (node.right) {
      path.push(node.right.val);
      dfs(node.right);
      path.pop();
    }
    if (!node.left && !node.right) {
      let s = 0;
      for (let i = 0; i < path.length; i++) {
        s += path[i];
      }
      if (s === sum) {
        res.push(path.slice());
      }
    }
  }
  dfs(root);
  return res;
};
