/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function (n) {
    let sub = n;
    let i = 1;
    while (i) {
        if (sub < i) {
            return i - 1;
        }
        sub = sub - i;
        i++;
    }
};