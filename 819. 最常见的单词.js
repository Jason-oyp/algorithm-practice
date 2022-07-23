// /**
//  * @param {string} paragraph
//  * @param {string[]} banned
//  * @return {string}
//  */
// var mostCommonWord = function (paragraph, banned) {
//   const result = paragraph
//     .replace(/\!|\?|\'|,|;|\./gm, "")
//     .toLowerCase()
//     .split(" ");
//   banned = new Set(banned);
//   let p = "",
//     count = Number.MIN_SAFE_INTEGER;
//   let map = {};
//   for (let i = 0; i < result.length; i++) {
//     if (!banned.has(result[i])) {
//       if (map[result[i]]) {
//         map[result[i]]++;
//       } else {
//         map[result[i]] = 1;
//       }
//       if (count < map[result[i]]) {
//         p = result[i];
//         count = map[result[i]];
//       }
//     }
//   }

//   console.log(p, count);
//   return p;
// };

// mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
//   "hit",
// ]);


// 再研究，官网解法

var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set();
    for (const word of banned) {
        bannedSet.add(word);
    }
    let maxFrequency = 0;
    const frequencies = new Map();
    let sb = '';
    const length = paragraph.length;
    for (let i = 0; i <= length; i++) {
        if (i < length && isLetter(paragraph[i])) {
            sb = sb + paragraph[i].toLowerCase();
        } else if (sb.length > 0) {
            if (!bannedSet.has(sb)) {
                const frequency = (frequencies.get(sb) || 0) + 1;
                frequencies.set(sb, frequency);
                maxFrequency = Math.max(maxFrequency, frequency);
            }
            sb = '';
        }
    }
    let mostCommon = "";
    for (const [word, frequency] of frequencies.entries()) {
        if (frequency === maxFrequency) {
            mostCommon = word;
            break;
        }
    }
    return mostCommon;
};

const isLetter = (ch) => {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}
