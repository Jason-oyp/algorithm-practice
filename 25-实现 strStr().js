/**
 * 这是使用js已经提供好的api实现的
 * @param {*} haystack 
 * @param {*} needle 
 * @returns 
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

/**
 * 这种好像效率并不高。。。
 * @param {*} haystack 
 * @param {*} needle 
 * @returns 
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let bool = true
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    bool = false
                    break
                }
            }
            if (bool) {
                return i
            }
        }
    }
    return -1
};