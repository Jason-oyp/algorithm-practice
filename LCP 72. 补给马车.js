/**
 * @param {number[]} supplies
 * @return {number[]}
 */
var supplyWagon = function (supplies) {
    const supplicesLen = supplies.length

    function _su(arr, supplicesLen) {
        if (arr.length <= Math.floor(supplicesLen / 2)) {
            return arr
        }
        const array = []
        for (let i = 1; i < arr.length; i++) {
            array[i] = arr[i] + arr[i - 1]
        }
        array.shift()
        const index = array.indexOf(Math.min(...array))
        arr[index] = array[index]
        arr.splice(index + 1, 1)
        return _su(arr, supplicesLen)
    }
    return _su(supplies, supplicesLen)
};