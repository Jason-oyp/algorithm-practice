/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let l = 0,
        r = 0,
        count = 0;
    while (r < k) {
        count += blocks[r] === 'W' ? 1 : 0
        r++
    }
    let result = count
    while (r < blocks.length) {
        count += blocks[r] === 'W' ? 1 : 0
        count -= blocks[l] === 'W' ? 1 : 0
        result = Math.min(count, result)
        l++
        r++
    }
    return result
};