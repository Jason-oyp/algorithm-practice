/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function (solution, guess) {
  const arr = [0, 0];
  let count = [];
  for (let i = 0; i < 4; i++) {
    if (solution[i] === guess[i]) {
      arr[0]++;
      count.push(i);
    }
  }
  let solution1 = [],
    guess1 = [];
  for (let i = 0; i < 4; i++) {
    if (count.includes(i)) {
      continue;
    }
    solution1.push(solution[i]);
    guess1.push(guess[i]);
  }
  let solution2 = { R: 0, G: 0, B: 0, Y: 0 },
    guess2 = { R: 0, G: 0, B: 0, Y: 0 };
  for (let i = 0; i < solution1.length; i++) {
    solution2[solution1[i]]++;
    guess2[guess1[i]]++;
  }
  Object.keys(solution2).forEach((it) => {
    arr[1] += Math.min(solution2[it], guess2[it]);
  });
  return arr;
};
