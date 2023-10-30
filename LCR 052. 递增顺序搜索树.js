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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let result = null

    function _dfs(root) {
        if (!root) {
            return
        }
        _dfs(root.right)
        const node = new TreeNode()
        node.val = root.val
        node.right = result
        result = node
        _dfs(root.left)
    }

    _dfs(root)
    return result
};