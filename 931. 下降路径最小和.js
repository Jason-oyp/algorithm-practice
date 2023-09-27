/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    const n = matrix.length;
    const dp = new Array(n).fill(0).map(it => new Array(n).fill(0))
    dp[0] = [...matrix[0]]
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let mn = dp[i - 1][j]
            if (j > 0) {
                mn = Math.min(mn, dp[i - 1][j - 1])
            }
            if (j < n - 1) {
                mn = Math.min(mn, dp[i - 1][j + 1])
            }
            dp[i][j] = mn + matrix[i][j]
        }
    }
    return Math.min(...dp[n - 1])
};