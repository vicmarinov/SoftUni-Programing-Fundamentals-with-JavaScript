function printFirstAndLastKNumbers (inputArray) {
    let numK = inputArray.shift();
    let nums = inputArray.slice();
    
    let numsFirst = nums.slice(0, numK);
    let numsLast = nums.slice(nums.length - numK);

    console.log(numsFirst.join(' '));
    console.log(numsLast.join(' '));
}

printFirstAndLastKNumbers([
    2,
    7, 8, 9
]);

printFirstAndLastKNumbers([
    3,
    6, 7, 8, 9
]);