/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let valid = true;
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === '|') {
            valid = !valid;
        } else if (c === '*' && valid) {
            res++;
        }
    }
    return res;
};