/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function(staple, drinks, x) {
    let ans = 0;
    let map = new Map();
    map.set(0,0);
    staple.forEach(i=>{
        i<=x ? map.set(i,( map.has(i)? map.get(i)+1 : 1 )) : 0;
    })
    for(let i = 1;i<=x;i++){
        map.set(i, map.has(i) ? map.get(i) + map.get(i-1) : map.get(i - 1));
    }
    drinks.forEach(i=>{
        i<=x ? ans = map.get(x-i) + ans : 0;
    })
    
    return ans%1000000007;
};
