var findRepeatNumber = function(nums) {
    const temp = {}
    const len = nums.length
    for (let i = 0; i < len; i++) {
        if (temp[nums[i]]) {
            return nums[i]
        } else {
            temp[nums[i]] = true
        }
    }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))