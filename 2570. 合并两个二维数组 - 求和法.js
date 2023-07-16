/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    const arr = nums1.concat(nums2)
    const map = {}

    for (let i = 0; i < arr.length; i++) {
        map[arr[i][0]] = (map[arr[i][0]] || 0) + arr[i][1]
    }
    return Object.entries(map).sort((a, b) => a[0] - b[0])
};