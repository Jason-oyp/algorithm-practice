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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let result = null;
  function dfs(root, val) {
    if (root === null) return;
    dfs(root.left);
    if (root.val === val) {
      result = root;
      return;
    }
    dfs(root.right);
  }
  dfs(root, val);
  return result;
};

// 解法二：
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root === null) return root;
  if (root.val === val) return root;
  if (root.val < val) {
    return searchBST(root.right, val);
  }
  if (root.val > val) {
    return searchBST(root.left, val);
  }
};
