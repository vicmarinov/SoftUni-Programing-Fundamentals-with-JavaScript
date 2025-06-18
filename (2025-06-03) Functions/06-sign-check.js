function signCheck (numFirst, numSecond, numThird) {
    let negativeNumsQuantity = 0;

    if (numFirst < 0){
        negativeNumsQuantity++;
    }

    if (numSecond < 0){
        negativeNumsQuantity++;
    }

    if (numThird < 0){
        negativeNumsQuantity++;
    }

    if (negativeNumsQuantity % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);