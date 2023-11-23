/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
    if (s1[0] != s2[0] || s1[0] != s3[0] || s2[0] != s3[0]) {
        return -1
    }
    const n1 = s1.length,
        n2 = s2.length,
        n3 = s3.length
    let minN = Math.min(n1, n2, n3)
    let c = 0
    for (let i = 0; i < minN; i++) {
        if (s1[i] == s2[i] && s2[i] == s3[i]) {
            c++
        } else {
            break
        }
    }
    return n1 + n2 + n3 - 3 * c
};