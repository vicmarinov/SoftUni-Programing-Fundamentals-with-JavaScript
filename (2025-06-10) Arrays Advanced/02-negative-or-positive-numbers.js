function negativeOrPositiveNumbers (numbersAsString) {
    let positiveNumbers = numbersAsString
        .map(Number)
        .filter(x => x >= 0);
    
    let negativeNumbers = numbersAsString
        .map(Number)
        .filter(x => x < 0);
    
    let result = [];

    for (let positiveNumber of positiveNumbers) {
        result.push(positiveNumber);
    }

    for (let negativeNumber of negativeNumbers) {
        result.unshift(negativeNumber);
    }

    console.log(result.join("\n"));
}

negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);