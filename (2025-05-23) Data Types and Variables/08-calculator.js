function calculator (numFirst, operator, numSecond) {
    let result;

    switch (operator) {
        case "+":
            result = numFirst + numSecond;
            break;
        case "-":
            result = numFirst - numSecond;
            break;
        case "*":
            result = numFirst * numSecond;
            break;
        case "/":
            result = numFirst / numSecond;
            break;
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);