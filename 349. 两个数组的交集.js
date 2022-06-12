// 解法1

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  const num = [];
  if (nums1.length < nums2.length) {
    const _ = nums1;
    nums1 = nums2;
    nums2 = _;
  }
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      num.push(nums1[i]);
    }
  }
  return num;
};

// 解法2

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  return nums1.filter((item) => nums2.includes(item));
};
