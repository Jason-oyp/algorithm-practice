/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
    let result = logs[0][0],
        max = logs[0][1]
    for (let i = 1; i < logs.length; i++) {
        const temp = logs[i][1] - logs[i - 1][1]
        if (temp > max) {
            result = logs[i][0]
        } else if (temp === max) {
            result = Math.min(logs[i][0], result)
        }
        max = Math.max(temp, max)
    }
    return result
};