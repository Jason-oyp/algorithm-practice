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
 * @return {number}
 */
var minDiffInBST = function (root) {
  let val = Number.MAX_SAFE_INTEGER;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (root.left) {
      const value = Math.abs(root.val - root.left.val);
      if (value < val) {
        val = value;
      }
    }
    dfs(root.right);
  }
  dfs(root);
  return val
};


// 官网解法，差不多
var minDiffInBST = function(root) {
    let ans = Number.MAX_SAFE_INTEGER, pre = -1;
    const dfs = (root) => {
        if (root === null) {
            return;
        }
        dfs(root.left);
        if (pre == -1) {
            pre = root.val;
        } else {
            ans = Math.min(ans, root.val - pre);
            pre = root.val;
        }
        dfs(root.right);
    }
    dfs(root);
    return ans;
};
