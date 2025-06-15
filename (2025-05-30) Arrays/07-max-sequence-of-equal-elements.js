function maxSequenceOfEqualElements (arr) {
    let sequences = [];

    let sequence = [];
    for (let i = 0; i < arr.length; i++) {
        sequence.push(arr[i]);

        if (arr[i] !== arr [i + 1]) {
            sequences.push(sequence);
            sequence = [];
        }
    }

    let maxSequence = [];
    for (let i = 0; i < sequences.length; i++) {
        if (sequences[i].length > maxSequence.length) {
            maxSequence = sequences[i];
        }
    }

    console.log(maxSequence.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);