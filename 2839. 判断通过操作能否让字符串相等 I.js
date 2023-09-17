/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
    if (s1 === s2) {
        return true
    }
    if (s1[0] + s1[2] !== s2[0] + s2[2] && s1[0] + s1[2] !== s2[2] + s2[0]) {
        return false
    }
    if (s1[1] + s1[3] !== s2[1] + s2[3] && s1[1] + s1[3] !== s2[3] + s2[1]) {
        return false
    }
    return true
};