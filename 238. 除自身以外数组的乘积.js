/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let len = nums.length;
    let ans = Array.from({
        length: len
    });
    let R = 1;
    ans[0] = 1;
    // ans[i]等于数组i左侧所有数字的乘积
    for (let i = 1; i < len; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }
    // 乘上R即所有右侧元素的乘积
    for (let i = len - 1; i >= 0; i--) {
        ans[i] = ans[i] * R;
        R *= nums[i]
    }
    return ans;
};