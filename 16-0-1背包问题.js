// 0-1背包问题

let allObjects = [{
    value: 4,
    volume: 2
}, {
    value: 5,
    volume: 3
}, {
    value: 7,
    volume: 4
}, {
    value: 8,
    volume: 5
}, {
    value: 9,
    volume: 6
}];

function getMaxValue(bagVolume, objects) {

    // 没有可选的东西
    if (objects.length === 0) {
        return {
            objects: [],
            value: 0,
            volume: 0
        }
    }
    const left = objects.slice(1);
    // 第一件物品的体积比背包剩余空间大，放不下，直接算后面的最优解
    if (objects[0].volume > bagVolume) {
        return getMaxValue(bagVolume, left);
    }

    // 在第一件物品放得下的情况下，考虑第一件物品放进去后，剩余物品的最优解
    const nextMaxValue = getMaxValue(bagVolume - objects[0].volume, left);
    nextMaxValue.objects.push(objects[0]);
    nextMaxValue.value += objects[0].value;
    nextMaxValue.volume += objects[0].volume;

    // 在第一件物品放得下的情况下，考虑第一件物品不放进去后，剩余物品的最优解
    const nextMaxValueNo1 = getMaxValue(bagVolume, left);


    // 前面两种情况算出来后比较那种最好
    if (nextMaxValue.value > nextMaxValueNo1.value) {
        return nextMaxValue;
    } else {
        return nextMaxValueNo1;
    }
}

console.log(getMaxValue(12, allObjects));
