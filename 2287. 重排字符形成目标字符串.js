/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (target.includes(s[i])) {
            map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1)
        }
    }
    const targetMap = new Map()
    for (let i = 0; i < target.length; i++) {
        targetMap.set(target[i], targetMap.get(target[i]) ? targetMap.get(target[i]) + 1 : 1)
    }
    let ans = Number.MAX_SAFE_INTEGER
    for (let [sss, count] of targetMap) {
        ans = Math.min(Math.floor(map.get(sss) / count), ans)
        if (!ans) {
            return 0
        }
    }
    return ans
}