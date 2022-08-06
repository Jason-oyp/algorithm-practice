/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    const left =[], right = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return left.concat(right)
};