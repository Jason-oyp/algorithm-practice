/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const set = new Set()
    for (let i = 0; i < k; i++) {
        set.add(i + 1)
    }
    for (let i = nums.length; i >= 0; i--) {
        set.delete(nums[i])
        if (set.size === 0) {
            return nums.length - i
        }
    }
};