function equalSums (arr) {
    let equalSumsIndices = [];

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        let rightSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        if (leftSum === rightSum) {
            equalSumsIndices.push(i);
        }
    }

    if (equalSumsIndices.length === 0) {
        console.log("no");
    } else {
        console.log(equalSumsIndices.join(' '));
    }
}

// Alternative solution
// --------------------

// function equalSums (arr) {
//     let equalSumsIndices = [];

//     let totalSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         totalSum += arr[i];
//     }

//     let leftSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (leftSum === totalSum - leftSum - arr[i]) {
//             equalSumsIndices.push(i);
//         }

//         leftSum += arr[i];
//     }

//     if (equalSumsIndices.length === 0) {
//         console.log("no");
//     } else {
//         console.log(equalSumsIndices.join(' '));
//     }
// }

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);