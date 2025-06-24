function sumFirstAndLast (numbersAsString) {
    let numbers = numbersAsString.map(Number);
    let result = numbers.shift() + numbers.pop();
    console.log(result);
}

sumFirstAndLast(["20", "30", "40"]);
sumFirstAndLast(["5", "10"]);