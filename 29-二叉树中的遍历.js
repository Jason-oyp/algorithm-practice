var inorderTraversal = function(root) {
    const result = []
    function forEach (root) {
        if (root === null) return
        forEach(root.left)
        result.push(root.val)
        forEach(root.right)
    }
    forEach(root)
    return result
};