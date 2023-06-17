/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let ans = 0,
        n = Math.min(a, b)
    for (let i = 1; i <= n; i++) {
        if (a % i === 0 && b % i === 0) {
            ans++
        }
    }
    return ans
};