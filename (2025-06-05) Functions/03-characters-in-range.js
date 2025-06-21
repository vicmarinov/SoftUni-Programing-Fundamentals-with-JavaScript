function printCharactersInRange (charFirst, charSecond) {
    function getSortedASCIICodesFromTwoChars (charFirst, charSecond) {
        let charFirstASCIICode = charFirst.charCodeAt(0);
        let charSecondASCIICode = charSecond.charCodeAt(0);
        
        if (charFirstASCIICode > charSecondASCIICode) {
            let temp = charFirstASCIICode;
            charFirstASCIICode = charSecondASCIICode;
            charSecondASCIICode = temp;
        }

        return [charFirstASCIICode, charSecondASCIICode];
    }

    function getCharsInRange (startASCIICode, stopASCIICode) {
        let charsInRange = [];

        // Loop excludes startASCIICode and stopASCIICode
        for (let i = startASCIICode + 1; i < stopASCIICode; i++) {
            charsInRange.push(String.fromCharCode(i));
        }

        return charsInRange;
    }

    let [charFirstASCIICode, charSecondASCIICode] =
        getSortedASCIICodesFromTwoChars(charFirst, charSecond);
    
    let charsInRange = getCharsInRange(charFirstASCIICode, charSecondASCIICode);
    console.log(charsInRange.join(' '));
}

printCharactersInRange('a', 'd');
printCharactersInRange('#', ':');
printCharactersInRange('C', '#');