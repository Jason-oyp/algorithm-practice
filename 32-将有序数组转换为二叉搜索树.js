function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null
    }
    if (nums.length === 1) {
        return new treeNode(nums[0])
    }
    const middle = parseInt(nums.length / 2)
    const root = new treeNode(nums[middle])
    root.left = sortedArrayToBST(nums.slice(0, middle))
    root.right = sortedArrayToBST(nums.slice(middle + 1))
    return root
};