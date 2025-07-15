function searchForWord (word, text) {
    let textContainsWord = text
        .toLowerCase()
        .split(' ')
        .includes(word.toLowerCase());

    if (textContainsWord) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

searchForWord("javascript", "JavaScript is the best programming language");
searchForWord("python", "JavaScript is the best programming language");