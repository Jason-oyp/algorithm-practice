/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const arr = Array.from(nums).sort((a,b) => a - b)
    const result = nums.join()
    for (let i = 0; i < arr.length; i++) {
        const left = arr.slice(0, i)
        const right = arr.slice(i)
        if (result === [...right, ... left].join()) {
            return true
        }
    }
    return false
};

// 下面这种解法可以多思考思考
// var check = function(nums) {
//     let n = nums.length, x = 0;
//     for (let i = 1; i < n; ++i) {
//         if (nums[i] < nums[i - 1]) {
//             x = i;
//             break;
//         }
//     }
//     if (x === 0) {
//         return true;
//     }
//     for (let i = x + 1; i < n; ++i) {
//         if (nums[i] < nums[i - 1]) {
//             return false;
//         }
//     }
//     return nums[0] >= nums[n - 1];
// };
