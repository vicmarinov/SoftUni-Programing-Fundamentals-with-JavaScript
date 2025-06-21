function findOddAndEvenDigitsSum (num) {
    function extractDigitsFromANumber (num) {
        let digits = [];

        while (num > 0) {
            let digit = num % 10;
            num = Number.parseInt(num / 10);
            
            digits.push(digit);
        }

        return digits;
    }

    function sortNumbersToEvenAndOdd (nums) {
        let numsEven = [];
        let numsOdd = [];

        for (let num of nums) {
            if (num % 2 === 0) {
                numsEven.push(num);
            } else {
                numsOdd.push(num);
            }
        }

        return [numsEven, numsOdd];
    }

    function sumArray (arr) {
        let sum = 0;

        for (let num of arr) {
            sum += num;
        }

        return sum;
    }
    
    let digits = extractDigitsFromANumber(num);
    let [digitsEven, digitsOdd] = sortNumbersToEvenAndOdd(digits);

    let digitsEvenSum = sumArray(digitsEven);
    let digitsOddSum = sumArray(digitsOdd);
    
    console.log(`Odd sum = ${digitsOddSum}, Even sum = ${digitsEvenSum}`);
}

findOddAndEvenDigitsSum(1000435);
findOddAndEvenDigitsSum(3495892137259234);