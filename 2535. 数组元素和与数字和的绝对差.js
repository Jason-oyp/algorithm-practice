/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    const sum = nums.reduce((a, b) => a + b)
    const numsSum = nums.reduce((a, b) => a + ("" + b).split('').reduce((c, d) => +c + +d, 0), 0)
    return Math.abs(sum - numsSum)
};