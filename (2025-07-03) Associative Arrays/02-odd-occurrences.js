function oddOccurrences (wordsAsString) {
    let wordsArr = wordsAsString.split(' ');

    let wordsOccurrences = new Map();

    for (let word of wordsArr) {
        word = word.toLowerCase();

        if (!wordsOccurrences.has(word)) {
            wordsOccurrences.set(word, 1);
        } else {
            wordsOccurrences.set(word, wordsOccurrences.get(word) + 1);
        }
    }

    let result = Array.from(wordsOccurrences)
        .filter(entry => entry[1] % 2 !== 0)
        .map(entry => entry[0])
        .join(' ');
    
    console.log(result);
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");