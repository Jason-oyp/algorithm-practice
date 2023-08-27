/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
    const left = nums.indexOf(1)
    const right = nums.indexOf(nums.length)
    if (left < right) {
        return left + nums.length - 1 - right
    } else {
        return left + nums.length - right - 2
    }
};