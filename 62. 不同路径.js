/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = new Array(m).fill(0).map(it => new Array(n).fill(0))
    dp[0] = new Array(n).fill(1)
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp.at(-1).at(-1)
};