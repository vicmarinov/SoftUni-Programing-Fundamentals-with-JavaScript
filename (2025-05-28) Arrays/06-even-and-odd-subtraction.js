function evenAndOddSubtraction (nums) {
    let evenNumsSum = 0;
    let oddNumsSum = 0;

    for (let num of nums) {
        if (num % 2 === 0) {
            evenNumsSum += num;
        } else {
            oddNumsSum += num;
        }
    }

    console.log(evenNumsSum - oddNumsSum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);