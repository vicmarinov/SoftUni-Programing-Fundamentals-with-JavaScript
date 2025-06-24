function lastKNumbersSequence (numN, numK) {
    function sumArray (arr) {
        let sum = 0;
        for (let num of arr) {
            sum += num;
        }
        return sum;
    }

    let sequence = [];

    if(numN > 0) {
        sequence.push(1);
    }

    for (let i = 1; i < numN; i++) {
        let sliceStart = i - numK >= 0 ? i - numK : 0;
        let lastKNumbers = sequence.slice(sliceStart, i);
        sequence.push(sumArray(lastKNumbers));
    }

    console.log(sequence.join(' '));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);