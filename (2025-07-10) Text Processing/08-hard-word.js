function revealHardWords (inputArr) {
    let [cipheredText, wordsList] = inputArr
    
    let wordsCiphers = new Map();

    for (let word of wordsList) {
        wordsCiphers.set("_".repeat(word.length), word);
    }

    let text = cipheredText;

    for (let [cipher, word] of Array.from(wordsCiphers).sort((a, b) => b[0].length - a[0].length)) {
        text = text.replaceAll(cipher, word);
    }

    console.log(text);
}

revealHardWords([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"]
]);
