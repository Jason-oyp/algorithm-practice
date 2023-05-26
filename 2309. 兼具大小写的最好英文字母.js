/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    const arr = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        const temp = s[i]
        const l = temp.toLocaleLowerCase().charCodeAt() - 97
        if (arr[l] === 0) {
            arr[l] = temp.toLocaleLowerCase() === temp ? 1 : 2
        }
        if (arr[l] === 1) {
            if (temp.toLocaleLowerCase() === temp) {
                continue
            }
            arr[l] = 3
        }
        if (arr[l] === 2) {
            if (temp.toLocaleLowerCase() === temp) {
                arr[l] = 3
            }
        }
    }
    const i = arr.lastIndexOf(3)
    if (i === -1) return ''
    return String.fromCharCode(i + 97).toLocaleUpperCase()
};