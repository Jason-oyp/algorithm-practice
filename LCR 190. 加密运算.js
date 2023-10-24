/**
 * @param {number} dataA
 * @param {number} dataB
 * @return {number}
 */
var encryptionCalculate = function (a, b) {
    return b ? encryptionCalculate(a ^ b, (a & b) << 1) : a;
};