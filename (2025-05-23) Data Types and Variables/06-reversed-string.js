function reversedString (str) {
    let strReversed = str.split('').reverse().join('');

    // Alternative:
    // -----------

    // let strReversed = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     strReversed += str[i];
    // }

    console.log(strReversed);
}

reversedString("Information");
reversedString("star");
reversedString("racecar");