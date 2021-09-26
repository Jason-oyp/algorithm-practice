var maxSubArray = function (nums) {
    let max = -(10 ** 5)
    let sum = 0
    for (const num in nums) {
        if (Object.hasOwnProperty.call(nums, num)) {
            const element = nums[num];
            if (sum < 0) {
                sum = 0
            }
            sum += num
        }
        max = Math.max(max, sum)
    }
    return max
};