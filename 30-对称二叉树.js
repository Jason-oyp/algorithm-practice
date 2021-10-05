var isSymmetric = function(root) {
    if (!root) {
        return true
    }
    function compare (p, q) {
        if (p === null && q === null) {
        return true
        }
        if (p === null ||  q === null) {
            return false
        }
        if (p.val !== q.val) {
            return false
        }
        return compare(p.left, q.right) && compare(p.right, q.left)
    }
    return compare(root.left, root.right)
};