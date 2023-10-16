/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let n1 = 0,
        m1 = 0
    for (let i = 1; i <= n; i++) {
        if (i % m !== 0) {
            n1 += i
        } else {
            m1 += i
        }
    }
    return n1 - m1
}