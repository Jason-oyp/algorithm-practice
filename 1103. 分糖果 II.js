/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const arr = new Array(num_people).fill(0);
  let i = 0,
    num = 1;
  while (true) {
    if (candies >= num) {
      arr[i] += num;
      candies = candies - num;
      if (candies === 0) return arr;
      i = (i + 1) % arr.length;
      num++;
    } else {
      arr[i] += candies;
      return arr;
    }
  }
};
