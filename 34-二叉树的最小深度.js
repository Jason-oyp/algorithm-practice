var minDepth = function(root) {
    if (root === null) return 0
    return 1 + (Math.min(minDepth(root.left), minDepth(root.right)))
};