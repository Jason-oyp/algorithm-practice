var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);
    const seen = new Set();
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        seen.add(nums[i] + nums[j]);
    }
    return seen.size;
}