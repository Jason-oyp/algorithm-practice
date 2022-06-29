// 美团算法题

// 给定数组 ['1a','2b','9c','5a'] ，输出出现次数最多的字母前数字之和 （此例最多字母为a，和为6）
const test = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i][arr[i].length - 1]]) {
      map[arr[i][arr[i].length - 1]].count++;
    } else {
      map[arr[i][arr[i].length - 1]] = {
        count: 1,
        word: arr[i][arr[i].length - 1],
      };
    }
  }
  let max = {
    count: -1,
    word: "",
  };
  Object.values(map).forEach((item) => {
    if (max.count < item.count) {
      max = item;
    }
  });
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][arr[i].length - 1] === max.word) {
      count += +arr[i].slice(0, arr[i].length - 1)
    }
  }
  console.log(max, count);
};

console.log(test(["1a", "2b", "13c", "54a", "234c", "25c"]));