/**
 * @param {number[]} runes
 * @return {number}
 */
var runeReserve = function (runes) {
    runes = runes.sort((a, b) => a - b)
    let ans = 0,
        cur = 1;
    for (let i = 1; i < runes.length; i++) {
        if (runes[i] - runes[i - 1] <= 1) {
            cur++
        } else {
            ans = Math.max(cur, ans)
            cur = 1;
        }
    }
    return Math.max(cur, ans)
};