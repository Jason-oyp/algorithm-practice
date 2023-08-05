/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
// var maxDivScore = function (nums, divisors) {
//     let arr = new Array(divisors.length).fill(0)
//     for (let i = 0; i < divisors.length; i++) {
//         arr[i] = [nums.filter(it => it % divisors[i] === 0).length, divisors[i]]
//     }
//     const max = Math.max(...arr.map(it => it[0]))
//     arr = arr.filter(it => it[0] === max).sort((a, b) => a[1] - b[1])
//     return arr[0][1]
// };
var maxDivScore = function (nums, divisors) {
    divisors = [...new Set(divisors)];
    divisors.sort((a, b) => a - b);
    let ans = divisors[0];
    let maxCnt = -1;
    for (let i = 0; i < divisors.length; i++) {
        const x = divisors[i];
        let cnt = 0;
        for (const y of nums) {
            if (y % x === 0) {
                cnt += 1;
            }
        }
        if (cnt > maxCnt) {
            ans = x;
            maxCnt = cnt;
        }
    }
    return ans;
};