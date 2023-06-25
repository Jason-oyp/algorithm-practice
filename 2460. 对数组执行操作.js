/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2
            nums[i + 1] = 0
        }
    }
    const arr = new Array(nums.length).fill(0)
    let j = 0,
        k = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            arr[j++] = nums[i]
        } else {
            arr[k--] = 0
        }
    }
    return arr
};