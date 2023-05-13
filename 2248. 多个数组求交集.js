function intersection(nums: number[][]): number[] {
  let a = nums[0];
  for (let i of nums) a = a.filter((_) => i.includes(_));
  return a.sort((a, b) => a - b);
}
