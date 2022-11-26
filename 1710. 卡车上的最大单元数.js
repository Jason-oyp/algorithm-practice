var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let res = 0;
  for (const boxType of boxTypes) {
    const numberOfBoxes = boxType[0];
    const numberOfUnitsPerBox = boxType[1];
    if (numberOfBoxes < truckSize) {
      res += numberOfBoxes * numberOfUnitsPerBox;
      truckSize -= numberOfBoxes;
    } else {
      res += truckSize * numberOfUnitsPerBox;
    }
  }
  return res;
};

var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    for (const boxType of boxTypes) {
        let numberOfBoxes = boxType[0];
        let numberOfUnitsPerBox = boxType[1];
        if (numberOfBoxes < truckSize) {
            res += numberOfBoxes * numberOfUnitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            res += truckSize * numberOfUnitsPerBox;
            break;
        }
    }
    return res;
};

var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    for (const boxType of boxTypes) {
        const numberOfBoxes = boxType[0];
        const numberOfUnitsPerBox = boxType[1];
        if (numberOfBoxes < truckSize) {
            res += numberOfBoxes * numberOfUnitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            res += truckSize * numberOfUnitsPerBox;
            break
        }
    }
    return res;
};