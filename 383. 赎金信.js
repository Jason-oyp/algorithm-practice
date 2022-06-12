/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const ranArr = ransomNote.split('')
    const magaArr = {}
    magazine.split('').forEach(item => {
        magaArr[item] = magaArr[item] ? magaArr[item] + 1 : 1
    })
    for (let i = 0; i < ranArr.length; i++) {
        if (magaArr[ranArr[i]]) {
            magaArr[ranArr[i]]--
        } else {
            return false
        }
    }
    return true
};