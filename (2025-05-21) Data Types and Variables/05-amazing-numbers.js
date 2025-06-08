function amazingNumbers (num) {
    let numAsString = String(num);
    let digitsSum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        digitsSum += Number(numAsString[i]);
    }

    let digitsSumAsString = String(digitsSum);
    let isAmazingNum = digitsSumAsString.includes("9") ? "True" : "False";

    console.log(`${num} Amazing? ${isAmazingNum}`);
}

amazingNumbers(1233);
amazingNumbers(583472);
amazingNumbers(999);


// The first idea
// --------------

// function amazingNumbers (num) {
//     let digitsSum = 0;
//     let remainingPart = num;
//     while (remainingPart > 0) {
//         let digit = remainingPart % 10;
//         digitsSum += digit;
//         remainingPart = (remainingPart - digit) / 10;
//     }

//     let isAmazingNum = false;
//     remainingPart = digitsSum;
//     while (remainingPart > 0) {
//         let digit = remainingPart % 10;
//         if (digit === 0) {
//             isAmazingNum = true;
//         }
//         remainingPart = (remainingPart - digit) / 10;
//     }

//     console.log(`${num} Amazing? ${isAmazingNum}`);
// }

// amazingNumbers(1233);
// amazingNumbers(583472);
// amazingNumbers(999);