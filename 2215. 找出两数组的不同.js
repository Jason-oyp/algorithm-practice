/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  function diff(nums1, nums2) {
    var set2 = new Set(nums2);
    var subset = new Set();
    nums1.forEach((val) => {
      if (!set2.has(val)) {
        subset.add(val);
      }
    });
    return [...subset];
  }
  const diff1 = diff(nums1, nums2);
  const diff2 = diff(nums2, nums1);
  return [diff1, diff2];
};
