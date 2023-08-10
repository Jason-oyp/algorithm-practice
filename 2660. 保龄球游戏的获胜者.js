/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  let p1 = 0;
  for (let i = 0; i < player1.length; i++) {
    if (player1[i - 1] === 10 || player1[i - 2] === 10) {
      p1 += player1[i] * 2;
    } else {
      p1 += player1[i];
    }
  }
  let p2 = 0;
  for (let i = 0; i < player2.length; i++) {
    if (player2[i - 1] === 10 || player2[i - 2] === 10) {
      p2 += player2[i] * 2;
    } else {
      p2 += player2[i];
    }
  }
  if (p1 === p2) return 0;
  if (p1 > p2) return 1;
  return 2;
};
