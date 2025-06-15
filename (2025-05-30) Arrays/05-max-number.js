function maxNumber (arr) {
    // A top integer is an integer, which is bigger than all the elements to its right.
    // To find all top numbers, we will iterate through the array from its end.

    let maxTopNumber = Number.MIN_SAFE_INTEGER;
    let topNumbers = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxTopNumber) {
            topNumbers.push(arr[i]);
            maxTopNumber = arr[i];
        }
    }
    // Since we collect top numbers by iterating from the end,
    // we need to reverse the topNumbers array to restore the original order.
    topNumbers.reverse();

    console.log(topNumbers.join(' '));
}

// Alternative solution
// --------------------

// function maxNumber (arr) {
//     // A top integer is an integer, which is bigger than all the elements to its right.
//     let topNumbers = [];

//     for (let i = 0; i < arr.length; i++) {
//         let currentNumber = arr[i];
//         let currentNumberIsATopNumber = true;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] >= currentNumber) {
//                 currentNumberIsATopNumber = false;
//                 break;
//             }
//         }

//         if (currentNumberIsATopNumber) {
//             topNumbers.push(currentNumber);
//         }
//     }

//     console.log(topNumbers.join(' '));
// }

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);