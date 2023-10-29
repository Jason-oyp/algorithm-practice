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
 * @param {number} k
 * @return {boolean}
 */
// var findTarget = function (root, k) {
//     const map = {}
//     let result = false
//     function _dfs(root) {
//         if (!root) {
//             return
//         }
//         _dfs(root.left)
//         if (map[k - root.val]) {
//             result = true
//             return
//         } else {
//             map[root.val] = true
//         }
//         _dfs(root.right)
//     }
//     _dfs(root)
//     return result
// };
var findTarget = function (root, k) {
    const set = new Set();
    const helper = (root, k) => {
        if (!root) {
            return false;
        }
        if (set.has(k - root.val)) {
            return true;
        }
        set.add(root.val);
        return helper(root.left, k) || helper(root.right, k);
    }
    return helper(root, k);
};