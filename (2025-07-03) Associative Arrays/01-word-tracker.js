function wordTracker (inputArr) {
    let [wordsToTrack, ...wordsArr] = inputArr;
    wordsToTrack = wordsToTrack.split(' ');
    
    let wordsOccurrences = new Map();

    for (let wordToCount of wordsToTrack) {
        wordsOccurrences.set(wordToCount, 0);
    }

    for (let word of wordsArr) {
        if (wordsOccurrences.has(word)) {
            wordsOccurrences.set(word, wordsOccurrences.get(word) + 1);
        }
    }
    
    for (let [word, occurrences] of [...wordsOccurrences].sort((a, b) => b[1] - a[1])) {
        // We can use [...wordsOccurrences] instead of Array.from(wordsOccurrences)
        console.log(`${word} - ${occurrences}`);
    }
}

wordTracker([
    "this sentence",
    "In", "this", "sentence", "you", "have", "to", "count", "the", "occurrences", "of",
    "the", "words", "this", "and", "sentence", "because", "this", "is", "your", "task"
]);

wordTracker([
    "is the", 
    "first", "sentence", "Here", "is", "another", "the", "And", "finally", "the", "the", "sentence"
]);