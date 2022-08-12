/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const found = new Set();
    for (const num of nums) {
        if (found.has(num)) {
            return num;
        }
        found.add(num);
    }
};