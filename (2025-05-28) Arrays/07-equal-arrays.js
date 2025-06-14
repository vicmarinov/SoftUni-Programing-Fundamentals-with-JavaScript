function equalArrays (arrFirst, arrSecond) {
    let areArraysEqual = true;
    let arrSum = 0;

    for (let i = 0; i < Math.max(arrFirst.length, arrSecond.length); i ++) {
        if (arrFirst[i] === arrSecond[i]) {
            arrSum += Number(arrFirst[i]);
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areArraysEqual = false;
            break;
        }
    }

    if (areArraysEqual) {
        console.log(`Arrays are identical. Sum: ${arrSum}`);
    }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);