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


var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    const cnt = new Array(26).fill(0);
    for (const c of magazine) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (const c of ransomNote) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]--;
        if(cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return false;
        }
    }
    return true;
};