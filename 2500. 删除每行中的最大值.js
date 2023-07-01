/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let ans = 0
    for (let i = 0; i < grid.length; i++) {
        grid[i].sort((a, b) => b - a)
    }
    for (let i = 0; i < grid[0].length; i++) {
        const arr = []
        for (let j = 0; j < grid.length; j++) {
            arr.push(grid[j][i])
        }
        ans += Math.max(...arr)
    }
    return ans
};