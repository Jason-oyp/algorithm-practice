/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function (cards, cnt) {
    cards = cards.sort((a, b) => a - b)
    const right = cards.slice(cards.length - cnt)
    let sum = right.reduce((a, b) => a + b)
    if (sum % 2 === 0) {
        return sum
    }
    let left = cards.slice(0, cards.length - cnt)
    const maxOdd = Math.max(...left.filter(it => it % 2))
    const maxEven = Math.max(...left.filter(it => it % 2 === 0))
    const minOdd = Math.min(...right.filter(it => it % 2))
    const minEven = Math.min(...right.filter(it => it % 2 === 0))
    const one = sum + maxEven - minOdd
    const two = sum + maxOdd - minEven
    if (one === -Infinity && two === -Infinity) return 0
    if (one === -Infinity) return two
    if (two === -Infinity) return one
    return Math.max(one, two)
};