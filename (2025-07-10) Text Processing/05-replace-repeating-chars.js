function replaceRepeatingChars (str) {
    let strWithoutRepeatingChars = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            strWithoutRepeatingChars += str[i];
        }
    }

    console.log(strWithoutRepeatingChars);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");