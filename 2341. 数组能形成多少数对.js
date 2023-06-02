/**
 * @param {number[]} nums
 * @return {number[]}
 */
function numberOfPairs(nums) {
    const ans = [0, 0],
        bucket = new Array(101).fill(0);

    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i]] += 1;
        ans[0] += bucket[nums[i]] % 2 ? 0 : 1;
        ans[1] += bucket[nums[i]] % 2 ? 1 : -1;
    }

    return ans;
};