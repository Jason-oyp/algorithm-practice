/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    num = String(num)
    const min = num.replaceAll(num[0], '0')
    let n = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== '9') {
            n = num[i]
            break
        }
    }
    const max = num.replaceAll(n, '9')
    return +max - +min

};