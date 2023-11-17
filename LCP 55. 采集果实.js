/**
 * @param {number[]} time
 * @param {number[][]} fruits
 * @param {number} limit
 * @return {number}
 */
var getMinimumTime = function (time, fruits, limit) {
    let ans = 0
    for (let i = 0; i < fruits.length; i++) {
        ans += Math.ceil(fruits[i][1] / limit) * time[fruits[i][0]]
    }
    return ans
};