/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = new Array(nums1.length).fill(-1);
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.findIndex((it) => {
      return nums1[i] === it;
    });
    let idx = null,
      flag = false;
    for (let j = index + 1; j < nums2.length; j++) {
      if (!flag && nums1[i] < nums2[j]) {
        idx = nums2[j];
        flag = true;
      }
    }
    if (idx !== null) {
      result[i] = idx;
    }
  }
  return result;
};
