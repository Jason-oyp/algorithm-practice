/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    nums = nums.sort((a, b) => a - b)
    const arr = []
    // const arr = new Array(nums.length).fill(0)
    for (let i = 0; i < nums.length - 1; i += 2) {
        arr.push(nums[i + 1])
        arr.push(nums[i])
        // arr[i] = nums[i + 1]
        // arr[i + 1] = nums[i]
    }
    return arr
};