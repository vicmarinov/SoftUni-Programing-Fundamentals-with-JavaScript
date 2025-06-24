function printSmallestTwoNumbers (numsArr) {
    let smallestTwoNumbers = numsArr
        .sort((a, b) => a - b)
        .slice(0, 2);
    
    console.log(smallestTwoNumbers.join(' '))
}

printSmallestTwoNumbers([30, 15, 50, 5]);
printSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);