/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    if (k <= numOnes + numZeros) {
        if (k <= numOnes) {
            return k
        } else {
            return numOnes
        }
    }
    return numOnes - (k - numOnes - numZeros)
};