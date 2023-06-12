/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    const set = new Set()
    for (let i = 0; i < nums.length - 1; i++) {
        if (set.has(nums[i] + nums[i + 1])) {
            return true
        }
        set.add(nums[i] + nums[i + 1])
    }
    return false
};