/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m).fill(0).map(it => new Array(n).fill(0))
    let flag = false
    for (let i = 0; i < m; i++) {
        if (flag) {
            dp[i][0] = 0
            continue
        }
        if (obstacleGrid[i][0]) {
            dp[i][0] = 0
            flag = true
        } else {
            dp[i][0] = 1
        }
    }
    flag = false
    for (let i = 0; i < n; i++) {
        if (flag) {
            dp[0][i] = 0
            continue
        }
        if (obstacleGrid[0][i]) {
            dp[0][i] = 0
            flag = true
        } else {
            dp[0][i] = 1
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 1
            }
            dp[i][j] = (obstacleGrid[i][j] ? 0 : (dp[i][j - 1])) + (obstacleGrid[i][j] ? 0 : dp[i - 1][j])
        }
    }
    return dp[m - 1][n - 1]
};