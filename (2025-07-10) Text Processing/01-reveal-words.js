function revealWords (wordsList, cipheredText) {
    let wordsCiphers = new Map();

    for (let word of wordsList.split(", ")) {
        wordsCiphers.set("*".repeat(word.length), word);
    }

    let text = cipheredText;

    for (let [cipher, word] of Array.from(wordsCiphers).sort((a, b) => b[0].length - a[0].length)) {
        text = text.replaceAll(cipher, word);
    }

    console.log(text);
}

revealWords("great", "softuni is a ***** place for learning new programming languages");
revealWords("great, learning", "softuni is a ***** place for ******** new programming languages");