/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    return words.map(it => it.split(separator).filter(it => it)).reduce((a, b) => [...a, ...b])
};