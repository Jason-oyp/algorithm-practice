/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp.at(-1);
};

// 这题就是打家劫舍的解题思路，就是换了一种说法



const arr1 = [
  { label: "衣服", id: 1, count: 6 },
  { label: "衣服", id: 1, count: 9 },
  { label: "裤子", id: 4, count: 3 },
  { label: "鞋子", id: 7, count: 1 },
  { label: "鞋子", id: 7, count: 11 },
  { label: "帽子", id: 9, count: 7 },
  { label: "帽子", id: 9, count: 2 },
];

function test(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(
      arr[i].label + ' ' + arr[i].id,
      ((map.get(arr[i].label + ' ' + arr[i].id)) || 0) + arr[i].count
    );
  }
  console.log(45, map)
  const ans = []
  for (let p of map) {
    console.log(40, p)
    const [nameId, count] = p
    ans.push({ label: nameId.split(' ')[0], id: nameId.split(' ')[1], count })
  }
  return ans
}

console.log(test(arr1))