function rightPlace (wordWithMissingChar, charToReplace, wordForComparison) {
    let wordWithReplacedChar = wordWithMissingChar.replace('_', charToReplace);
    if (wordWithReplacedChar === wordForComparison) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");