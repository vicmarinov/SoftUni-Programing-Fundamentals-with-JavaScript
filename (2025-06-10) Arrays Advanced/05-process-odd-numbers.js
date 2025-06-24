function processOddNumbers (numsArr) {
    let result = numsArr
        .filter((value, index) => index % 2 !== 0)
        .map(x => 2 * x)
        .reverse();
    
    console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);