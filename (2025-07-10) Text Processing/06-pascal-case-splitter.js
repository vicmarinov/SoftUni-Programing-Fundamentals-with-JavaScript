function splitOnPascalCase (strInPascalCase) {
    let words = [];
    let lastUppercaseCharIndex = 0;

    for (let i = 1; i < strInPascalCase.length; i++) {
        if (strInPascalCase[i] === strInPascalCase[i].toUpperCase()) {
            words.push(strInPascalCase.substring(lastUppercaseCharIndex, i));
            lastUppercaseCharIndex = i;
        }
    }

    words.push(strInPascalCase.substring(lastUppercaseCharIndex));

    console.log(words.join(", "));
}

splitOnPascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
splitOnPascalCase("HoldTheDoor");
splitOnPascalCase("ThisIsSoAnnoyingToDo");