function lettersChangeNumbers (inputStringsList) {
    function isLowercaseLetter (letter) {
        return letter === letter.toLowerCase();
    }

    function getLetterPositionInAlphabet (letter) {
        if (isLowercaseLetter(letter)) {
            return letter.charCodeAt(0) - 96;
        } else {
            return letter.charCodeAt(0) - 64;
        }
    }

    function sumArr (numsArr) {
        let sum = 0;

        for (let num of numsArr) {
            sum += num;
        }

        return sum;
    }

    let stringsArr = inputStringsList
        .split(' ')
        .filter(a => a !== '');
    
    let resultNumsArr = [];

    for (let str of stringsArr) {
        let leftLetter = str[0];
        let rightLetter = str[str.length - 1];

        let num = Number(str.substring(1, str.length - 1));

        if (isLowercaseLetter(leftLetter)) {
            num *= getLetterPositionInAlphabet(leftLetter);
        } else {
            num /= getLetterPositionInAlphabet(leftLetter);
        }

        if (isLowercaseLetter(rightLetter)) {
            num += getLetterPositionInAlphabet(rightLetter);
        } else {
            num -= getLetterPositionInAlphabet(rightLetter);
        }

        resultNumsArr.push(num);
    }

    console.log(sumArr(resultNumsArr).toFixed(2));
}

lettersChangeNumbers("A12b s17G");
lettersChangeNumbers("P34562Z q2576f   H456z");
lettersChangeNumbers("a1A");