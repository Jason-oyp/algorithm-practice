/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let ans = 0
    new Array(nums.length).fill(0).map((it, i) => i.toString(2)).forEach((it, i) => {
        if (it.replace(/0/g, '').length === k) {
            ans += nums[i]
        }
    })
    return ans
};