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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const result = [];
  let sum = 0;
  function dfs(roots) {
    const children = [];
    sum = 0;
    for (let i = 0; i < roots.length; i++) {
      if (!roots[i]) continue;
      sum += roots[i].val;
      roots[i].left && children.push(roots[i].left);
      roots[i].right && children.push(roots[i].right);
    }
    result.push(sum / roots.length);
    if (children.length === 0) return;

    dfs(children);
  }

  dfs([root]);
  return result;
};
