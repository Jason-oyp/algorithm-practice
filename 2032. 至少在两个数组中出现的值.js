/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) || nums3.includes(nums1[i])) {
      set.add(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i]) || nums3.includes(nums2[i])) {
      set.add(nums2[i]);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    if (nums2.includes(nums3[i]) || nums1.includes(nums3[i])) {
      set.add(nums3[i]);
    }
  }
  return [...set];
};
