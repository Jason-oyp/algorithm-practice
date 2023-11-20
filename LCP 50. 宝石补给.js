/**
 * @param {number[]} gem
 * @param {number[][]} operations
 * @return {number}
 */
var giveGem = function(gem, operations) {
    for (const operation of operations) {
        const x = operation[0];
        const y = operation[1];
        const number = Math.floor(gem[x] / 2);
        gem[x] -= number;
        gem[y] += number;
    }
    const mn = Math.min(...gem);
    const mx = Math.max(...gem);
    return mx - mn;
};
