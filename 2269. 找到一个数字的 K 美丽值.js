/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    num = num + ''
    const n = num.length
    let cnt = 0
    for (let i = 0; i < n - k + 1; i++) {
        let tmp = num.substring(i , i + k)
        if (num % +tmp === 0) cnt++ 
    }
    return cnt
};
