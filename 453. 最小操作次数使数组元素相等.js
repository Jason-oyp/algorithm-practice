/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves = function (nums) {
    return nums.reduce((prev, next) => prev + next) - Math.min(...nums) * nums.length
};