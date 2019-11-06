let arr = [4, 5, 6, 7, 8, 3, 4, 1, 2, 9, 12, 43];

//排序的本质是比较和交换
function compare(a, b) {
    return a < b ? false : true;
}

function exchange(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
    return arr;
}
console.log(sort(arr));