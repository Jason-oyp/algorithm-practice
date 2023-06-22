/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    let total = 0;
    let k = 0;
    for (let a of nums) {
        if (a % 6 === 0) {
            total += a;
            k++;
        }
    }
    return k > 0 ? Math.floor(total / k) : 0;
};