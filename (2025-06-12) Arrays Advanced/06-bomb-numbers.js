function bombNumbers (numSequenceArr, bombParameters) {
    function sumArray (arr) {
        let sum = 0;

        for (let num of arr) {
            sum += num;
        }

        return sum;
    }

    let numSequence = numSequenceArr.slice();
    let [bombNum, bombPower] = bombParameters;

    while(numSequence.includes(bombNum)) {
        let bombIndex = numSequence.indexOf(bombNum);

        let explosionStartIndex = bombIndex - bombPower;
        explosionStartIndex = explosionStartIndex < 0 ? 0 : explosionStartIndex;

        let explosionEndIndex = bombIndex + bombPower;
        explosionEndIndex = explosionEndIndex >= numSequence.length ? numSequence.length : explosionEndIndex;

        let explosionNumsQuantity = explosionEndIndex - (explosionStartIndex - 1);

        numSequence.splice(explosionStartIndex, explosionNumsQuantity);
    }

    console.log(sumArray(numSequence));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],       [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1],          [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3],             [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);