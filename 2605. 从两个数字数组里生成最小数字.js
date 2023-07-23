/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    const arr = nums1.filter(it => nums2.includes(it)).sort((a, b) => a - b)
    if (arr.length) {
        return arr[0]
    }
    const nums1Min = Math.min(...nums1)
    const nums2Min = Math.min(...nums2)
    if (nums1Min < nums2Min) {
        return Number(nums1Min + '' + nums2Min)
    }
    return Number(nums2Min + '' + nums1Min)
};