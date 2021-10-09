function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function getMaxDepth(root) {
    if (root === null) {
        return 0
    }
    return Math.max(getMaxDepth(root.left),getMaxDepth(root.right)) + 1
}

var isBalanced = function(root) {
    if (root === null) {
        return true
    }
    const leftDepth = getMaxDepth(root.left)
    const rightDepth = getMaxDepth(root.right)
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return false
    } else {
        return isBalanced(root.left) && isBalanced(root.right)
    }
};