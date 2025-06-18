function simpleCalculator (numFirst, numSecond, operator) {
    let calculation;

    switch(operator) {
        case "add":
            calculation = (numFirst, numSecond) => numFirst + numSecond;
            break;
        case "subtract":
            calculation = (numFirst, numSecond) => numFirst - numSecond;
            break;
        case "multiply":
            calculation = (numFirst, numSecond) => numFirst * numSecond;
            break;
        case "divide":
            calculation = (numFirst, numSecond) => numFirst / numSecond;
            break;
    }

    console.log(calculation(numFirst, numSecond));
}

simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");