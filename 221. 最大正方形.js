/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = new Array(m).fill(0).map(it => new Array(n).fill(0))
    let result = 0
    for (let i = 0; i < m; i++) {
        dp[i][0] = +matrix[i][0]
        if (dp[i][0] === 1) result = 1
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = +matrix[0][i]
        if (dp[0][i] === 1) result = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1
                result = Math.max(result, dp[i][j])
            } else {
                dp[i][j] = 0
            }
        }
    }
    return result * result
};