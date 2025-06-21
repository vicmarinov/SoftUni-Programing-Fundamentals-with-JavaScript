function divideFactorials (numFirst, numSecond) {
    function findFactorial (num) {
        return num === 1 ? 1 : num * findFactorial(num - 1);
    }

    // Alternative:
    // -----------

    // function findFactorial (num) {
    //     let result = 1;
    //     for (let i = 1; i <= num; i++) {
    //         result *= i;
    //     }
    //     return result;
    // }

    console.log((findFactorial(numFirst) / findFactorial(numSecond)).toFixed(2));
}

// Alternative solution
// --------------------

// function divideFactorials (numFirst, numSecond) {
//     if (numFirst > numSecond) {
//         // If a > b:
//         //     => a! = a * (a - 1) * (a - 2) * ... * (b + 2) * (b + 1) * b!
//         //     => a! / b! = a * (a - 1) * (a - 2) * ... * (b + 2) * (b + 1) * b! / b! =
//         //                = a * (a - 1) * (a - 2) * ... * (b + 2) * (b + 1)

//         let result = numFirst;
//         for (let i = numSecond + 1; i < numFirst; i++) {
//             result *= i;
//         }
//         console.log(result.toFixed(2));
//     } else if (numFirst < numSecond) {
//         function findFactorial (num) {
//             return num === 1 ? 1 : num * findFactorial(num - 1);
//         }
//         console.log((findFactorial(numFirst) / findFactorial(numSecond)).toFixed(2));
//     } else {
//         // If a === b:
//         //     => a! = b!
//         //     => a! / b! = 1

//         console.log("1.00");
//     }
// }

divideFactorials(5, 2);
divideFactorials(6, 2);