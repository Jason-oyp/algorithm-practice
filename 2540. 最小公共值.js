/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    // nums2 = new Set(nums2);
    // for (const item of nums1) {
    //     if (nums2.has(item)) return item;
    // }
    // return -1;
    for (let i = 0, j = 0; i < nums1.length && j < nums2.length;) {
        if (nums1[i] === nums2[j]) return nums1[i];
        if (nums1[i] > nums2[j]) j++;
        if (nums1[i] < nums2[j]) i++;
    }
    return -1;
};