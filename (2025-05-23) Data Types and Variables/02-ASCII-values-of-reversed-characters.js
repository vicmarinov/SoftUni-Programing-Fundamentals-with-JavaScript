function asciiValuesOfReversedCharacters (charFirst, charSecond, charThird) {
    let charsReversed = `${charThird}${charSecond}${charFirst}`;
    console.log(charsReversed);

    console.log(`${charsReversed.charCodeAt(0)} ${charsReversed.charCodeAt(1)} ${charsReversed.charCodeAt(2)}`);
}

asciiValuesOfReversedCharacters("a", "b", "c");
asciiValuesOfReversedCharacters("%", "2", "o");
asciiValuesOfReversedCharacters("1", "5", "p");