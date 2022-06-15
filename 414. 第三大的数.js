/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function (nums) {
    const arr = [...new Set(nums)].sort((a, b) => b - a)
    return arr[2] === undefined ? arr[0] : arr[2]
};