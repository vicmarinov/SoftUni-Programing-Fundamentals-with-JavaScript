function addAndSubtract (numFirst, numSecond, numThird) {
    let sum = (numA, numB) => numA + numB;
    let subtract = (numA, numB) => numA - numB;

    console.log(subtract(sum(numFirst, numSecond), numThird));
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);