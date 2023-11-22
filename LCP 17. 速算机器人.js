/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let x = 1;
    let y = 0;
    if (!s) {
        return x + y;
    }

    let i = 0;
    const len = s.length;

    for (i; i < len; i++) {
        if (s[i] === 'A') {
            x = 2 * x + y;
        }

        if (s[i] === 'B') {
            y = 2 * y + x;
        }
    }

    return x + y;
};