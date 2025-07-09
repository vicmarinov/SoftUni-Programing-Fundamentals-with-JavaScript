function printCensoredText (text, wordToCensor) {
    console.log(text.replaceAll(wordToCensor, "*".repeat(wordToCensor.length)));
}

printCensoredText("A small sentence with some words", "small");
printCensoredText("Find the hidden word", "hidden");