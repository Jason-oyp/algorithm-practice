/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
    const s = '' + n + 2 * n + 3 * n
    const arr = new Array(10).fill(0)
    for (let i = 0; i < s.length; i++) {
        arr[s[i]]++
    }
    return arr.slice(1).join('') === '111111111'
};