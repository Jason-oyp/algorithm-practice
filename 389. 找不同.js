/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    const sArr = new Array(26).fill(0)
    for (let prop of s) {
        sArr[prop.charCodeAt() - 'a'.charCodeAt()]++
    }
    for (let prop of t) {
        sArr[prop.charCodeAt() - 'a'.charCodeAt()]--
        if (sArr[prop.charCodeAt() - 'a'.charCodeAt()] === -1) {
            return prop
        }
    }
};

console.log(findTheDifference('', 'y'))

var findTheDifference = function(s, t) {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};