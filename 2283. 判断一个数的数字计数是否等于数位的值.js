/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    for (let i = 0; i < num.length; i++) {
        const n = +num[i]
        // console.log(num.replace(new RegExp(`[^${i}]`, 'g'), ''))
        if (num.replace(new RegExp(`[^${i}]`, 'g'), '').length !== n) {
            return false
        }
    }
    return true
};