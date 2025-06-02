function printAndSum (numsStart, numsEnd) {
    let numsAsString = "";
    let numsSum = 0;

    for (let num = numsStart; num <= numsEnd; num++) {
        numsAsString += num + " ";
        numsSum += num;
    }

    console.log(numsAsString);
    console.log(`Sum: ${numsSum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);