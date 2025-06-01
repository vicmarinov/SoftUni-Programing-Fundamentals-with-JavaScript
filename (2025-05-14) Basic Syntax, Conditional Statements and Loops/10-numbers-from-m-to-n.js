function numbersFromMtoN (numM, numN) {
    for (let i = numM; i >= numN; i--) {
        console.log(i);
    }
}

// Alternative variant
// -------------------

// function numbersFromMtoN (numM, numN) {
//     while (numM >= numN) {
//         console.log(numM);
//         numM--;
//     }
// }

numbersFromMtoN(6, 2);
numbersFromMtoN(4, 1);