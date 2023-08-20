/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    while (true) {
        if (s.includes('AB') || s.includes('CD')) {
            const result = s.replaceAll(/AB|CD/g, '')
            s = result
        } else {
            return s.length
        }
    }
};