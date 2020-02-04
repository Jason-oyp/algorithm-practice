/**
 * 青蛙跳台阶。
 * 一次只能跳一阶或两阶，问跳到n阶台阶一共有多少种跳法
 */
function jump(n) {
    let table = [];
    function _jump(n) {
        const isNum = table.findIndex((item) => {
            return item.num === n;
        })
        if (isNum !== -1) return table[isNum].result;

        console.log(n);


        if (n === 1) return 1, table.push({
            num: 1,
            result: 1
        });
        else if (n === 2) return 2, table.push({
            num: 2,
            result: 2
        });
        const result = _jump(n - 1) + _jump(n - 2);
        table.push({
            num: n,
            result
        });
        return result;
    }
    const result = _jump(n);
    console.log(table)
    return result;
}

console.log(jump(7));

