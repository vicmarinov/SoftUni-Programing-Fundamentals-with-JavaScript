function reverseAnArrayOfNumbers (newArrLength, originalArr) {
    let newArr = [];
    for (let i = 0; i < newArrLength; i++) {
        newArr.push(originalArr[i]);
    }

    console.log(newArr.reverse().join(' '));
}

// Alternative solution
// --------------------

// function reverseAnArrayOfNumbers (newArrLength, originalArr) {
//     let newArr = [];
//     for (let i = 0; i < newArrLength; i++) {
//         newArr.push(originalArr[i]);
//     }

//     for (let i = 0; i < newArrLength / 2; i++) {
//         let temp = newArr[i];
//         newArr[i] = newArr[newArrLength - 1 - i];
//         newArr[newArrLength - 1 - i] = temp;
//     }
    
//     let result = "";
//     for (let i = 0; i < newArrLength; i++) {
//         result += newArr[i] + " ";
//     }

//     console.log( result);
// }

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);