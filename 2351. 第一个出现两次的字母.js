/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i])) {
            return s[i]
        } else {
            map.set(s[i], 1)
        }
    }
};