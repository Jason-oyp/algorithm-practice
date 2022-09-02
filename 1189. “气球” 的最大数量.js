/**
 * @param {string} text
 * @return {number}
 */
const b = new Set(["a", "b", "l", "o", "n"]);
var maxNumberOfBalloons = function (text) {
  const map = {};
  for (let i = 0; i < text.length; i++) {
    if (map[text[i]]) {
      map[text[i]]++;
    } else {
      map[text[i]] = 1;
    }
  }
  const arr = Object.entries(map);
  const m = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "l" || arr[i][0] === "o") {
      arr[i][1] = Math.floor(arr[i][1] / 2);
      m[arr[i][0]] = arr[i][1];
    }
    if (b.has(arr[i][0])) {
      m[arr[i][0]] = arr[i][1];
    }
  }
  return Math.min(...Object.values(m));
};

var maxNumberOfBalloons = function (text) {
  const cnt = new Array(5).fill(0);
  for (const ch of text) {
    if (ch === "b") {
      cnt[0]++;
    } else if (ch === "a") {
      cnt[1]++;
    } else if (ch === "l") {
      cnt[2]++;
    } else if (ch === "o") {
      cnt[3]++;
    } else if (ch === "n") {
      cnt[4]++;
    }
  }
  cnt[2] = Math.floor(cnt[2] / 2);
  cnt[3] = Math.floor(cnt[3] / 2);
  return _.min(cnt);
};
