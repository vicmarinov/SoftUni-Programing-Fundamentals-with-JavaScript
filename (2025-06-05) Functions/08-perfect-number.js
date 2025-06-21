function perfectNumber (num) {
    function findNumberDivisors (num) {
        let numDivisors = [];

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                numDivisors.push(i);
            }
        }

        return numDivisors;
    }

    function sumArray (arr) {
        let sum = 0;

        for (let num of arr) {
            sum += num;
        }

        return sum;
    }

    let numDivisors = findNumberDivisors(num);

    if (num === sumArray(numDivisors)) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);