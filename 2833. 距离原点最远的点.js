/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {

    let move = 0,
        un = 0
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'R') {
            move++
        } else if (moves[i] === 'L') {
            move--
        } else {
            un++
        }
    }
    if (move === 0) {
        return un
    } else if (move > 0) {
        return move + un
    } else {
        return -move + un
    }
};