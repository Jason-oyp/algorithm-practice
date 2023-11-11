/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const map = {}
    for (let i = 0; i < numbers.length; i++) {
        if (map[target - numbers[i]] !== undefined) {
            return [map[target - numbers[i]], i]
        } else {
            map[numbers[i]] = i
        }
    }
};