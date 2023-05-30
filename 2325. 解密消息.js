/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    const map = {};
    let j = 0
    for (let i = 0; i < key.length; i++) {
        if (key[i] !== ' ') {
            if (!map[key[i]]) {
                map[key[i]] = String.fromCharCode(j++ + 97)
            }
        }
    }
    return message.split('').map(it => {
        return map[it] || it
    }).join('')
};