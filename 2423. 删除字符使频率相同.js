/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    function test(s) {
        const map = {}
        for (let i = 0; i < s.length; i++) {
            if (map[s[i]]) {
                map[s[i]]++
            } else {
                map[s[i]] = 1
            }
        }
        return new Set(Object.values(map)).size === 1
    }
    for (let i = 0; i < word.length; i++) {
        let s = [...word]
        s.splice(i, 1)
        if (test(s.join(''))) {
            return true
        }
    }
    return false
};