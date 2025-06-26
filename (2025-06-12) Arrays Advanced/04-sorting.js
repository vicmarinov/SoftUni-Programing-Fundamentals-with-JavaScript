function sorting (numsArr) {
    let numsSorted = numsArr.sort((a, b) => a - b);
    let resultArr = [];
    
    let leftIndex = 0, rightIndex = numsSorted.length - 1;

    for (i = 0; i < numsSorted.length; i++) {
        if (i % 2 !== 0) {
            resultArr.push(numsSorted[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(numsSorted[rightIndex]);
            rightIndex--;
        }
    }

    console.log(resultArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);