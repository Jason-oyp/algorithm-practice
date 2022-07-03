/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const arr = s.split(' ')
    const result = []
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i].split('').reverse())
    }
    return result.join(' ')
};