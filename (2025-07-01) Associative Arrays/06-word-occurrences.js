function printWordOccurrences (wordsArr) {
    let wordOccurrences = new Map();

    for (let word of wordsArr) {
        if (!wordOccurrences.has(word)) {
            wordOccurrences.set(word, 1);
        } else {
            wordOccurrences.set(word, wordOccurrences.get(word) + 1);
        }
    }

    for (let entry of Array.from(wordOccurrences).sort((a, b) => b[1] - a[1])) {
        let [word, occurrences] = entry;
        console.log(`${word} -> ${occurrences} times`);
    }
}

printWordOccurrences([
    "Here", "is", "the", "first", "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the", "third", "sentence"
]);

printWordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);