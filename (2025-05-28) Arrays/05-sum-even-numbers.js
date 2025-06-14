function sumEvenNumbers (numsAsStr) {
    let evenNumsSum = 0;

    for (let numAsStr of numsAsStr) {
        let num = Number(numAsStr);
        if (num % 2 === 0) {
            evenNumsSum += num;
        }
    }

    console.log(evenNumsSum);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);