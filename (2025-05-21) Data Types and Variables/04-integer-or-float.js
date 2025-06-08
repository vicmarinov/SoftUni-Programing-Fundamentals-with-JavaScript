function integerOrFloat (numFirst, numSecond, numThird) {
    let sum = numFirst + numSecond + numThird;
    let numType = sum % 1 === 0 ? "Integer" : "Float";
    
    console.log(`${sum} - ${numType}`);
}

integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303);