function countStringOccurrences (text, wordToCount) {
    let stringOccurrences = text
        .split(' ')
        .filter(word => word === wordToCount)
        .length;
    
    console.log(stringOccurrences);
}

countStringOccurrences(
    "This is a word and it also is a sentence",
    "is"
);

countStringOccurrences(
    "softuni is great place for learning new programming languages",
    "softuni"
);