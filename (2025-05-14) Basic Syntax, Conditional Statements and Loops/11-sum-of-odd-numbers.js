function sumOfOddNumbers (oddNumsQuantity) {
    let oddNumsSum = 0;
    let oddNum = 1;

    for (let i = 1; i <= oddNumsQuantity; i++) {
        console.log(oddNum);
        oddNumsSum += oddNum;

        oddNum += 2;
    }

    console.log(`Sum: ${oddNumsSum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);