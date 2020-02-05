/**
 * 找零全局最优解问题
 * @param {*} total 找零总数
 * @param {*} denos 可供选择的找零面额，为一个数组，例如：[25，20，10，5，1]
 * @return 返回结果一共两种情况分别为无解和最优解
 *         无解：返回空数组 []，
 *         最优解：返回一个选择了面额的数组，例如：[20,20,1]
 */


function findBestMethod(total, denos) {
    // 如果没有可选的面额了，则此次无解，返回空数组
    if (denos.length === 0) {
        return [];
    }
    let deno = denos[0];  // 取出第一个面额
    let left = denos.slice(1); // 取出除第一个面额的其他面额数组
    let nextTotal = total - deno; // 将第一个面额减去后的下一次需要找零的总数

    // 如果取出的第一个面额等于这一次的找零总数，那个这个就是这一次的最优解，直接返回这个面额
    if (deno === total) {
        return [deno];
    }

    // 如果取出的第一个面额大于这一次的找零总数，说明这个面额不行，需要去剩下的面额数组里面继续找
    else if (deno > total) {
        return findBestMethod(total, left);
    }

    // 如果说取出的第一个面额小于这一次的找零总数，那么又要分两种情况，然后对比这两种情况哪种最优，选中最优解：
    // 1.这一次用到了第一个面额，然后继续往后找，得到这种情况的解
    let result1 = findBestMethod(nextTotal, nextTotal >= deno ? denos : left);
    // 上面这行的参数用三目来选择所传的参数是优化下效率，
    // 区别是是否要把第一个面额再次传进去，因为如果下次要找的总数比第一个面额小的话，
    // 第一个面额就没必要再次传进去了


    result1.length === 0 ? "" : result1.unshift(deno);
    // 上面这行要根据算出来的这个解长度是否为零来考虑
    // 是否应该将第一个面额加进去是因为如果得到的解是无解（即为空数组），
    // 那么就没必要加这个面额了，因为要保证后面判断的时候无解就是一个空数组，不能影响后面的判断


    // 2.这一次没有用到第一个面额，而是从后面的面额中找，得到这种情况的解
    let result2 = findBestMethod(total, left);

    // 拿到 result1 和 result2 这两个解之后，对比下，
    // 如果说后者得出无解，那么不管前者是否无解，随便返回一种就行了，因为都是空数组
    // if (result2.length === 0) {
    //     return result1;
    // } else {

    //     // 如果说后者有解，那么就对比下两者那个长度短，返回短的那一个解就行了，因为短的数组，是最优解
    //     if (result1.length > result2.length) {
    //         return result2;
    //     } else {
    //         return result1;
    //     }
    // }

    // 下面一行是对上面的if判断的简写
    return result2.length === 0 ? result1 : (result1.length > result2.length ? result2 : result1);

}
const result = findBestMethod(41, [20, 1, 10, 25]);
console.log(result);
