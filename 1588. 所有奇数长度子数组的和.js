var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  const n = arr.length;
  for (let start = 0; start < n; start++) {
    for (let length = 1; start + length <= n; length += 2) {
      const end = start + length - 1;
      for (let i = start; i <= end; i++) {
        sum += arr[i];
      }
    }
  }
  return sum;
};
