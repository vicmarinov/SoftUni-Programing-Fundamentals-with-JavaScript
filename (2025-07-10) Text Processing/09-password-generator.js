function passwordGenerator (wordsArr) {
    function replaceCharAt (string, indexToReplaceAt, charToReplace) {
        let stringWithReplacedChar = string.substring(0, indexToReplaceAt) +
                                     charToReplace +
                                     string.substring(indexToReplaceAt + 1);
        
        return stringWithReplacedChar;
    }

    const lowercaseVowels = ['a', 'e', 'i', 'o', 'u'];

    const firstWord = wordsArr.slice(0, 1)[0].toLowerCase();
    const secondWord = wordsArr.slice(1, 2)[0].toLowerCase();
    const thirdWord = wordsArr.slice(2)[0].toUpperCase();

    let password = firstWord + secondWord;

    let lastUsedIndexOfThirdWord = 0;

    for (let i = 0; i < password.length; i++) {
        if (lowercaseVowels.includes(password[i])) {
            password = replaceCharAt(password, i, thirdWord[lastUsedIndexOfThirdWord]);

            lastUsedIndexOfThirdWord++;

            if (lastUsedIndexOfThirdWord >= thirdWord.length) {
                lastUsedIndexOfThirdWord = 0;
            }
        }
    }

    password = password
        .split('')
        .reverse()
        .join('');

    console.log(`Your generated password is ${password}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
passwordGenerator(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);