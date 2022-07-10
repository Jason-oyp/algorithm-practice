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
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  function dfs(root1, root2) {
    if (!root1 && !root2) {
      return null;
    }
    if (root1 && root2) {
      root1.val += root2.val;
    }
    if (root1 && !root2) {
      return root1;
    }
    if (!root1 && root2) {
      return root2;
    }
    root1.left = dfs(root1.left, root2.left);
    root1.right = dfs(root1.right, root2.right);
    return root1;
  }

  return dfs(root1, root2);
};
