function division (num) {
    let maxDivisor = 1;

    if (num % 10 === 0) {
        maxDivisor = 10;
    } else if (num % 7 === 0) {
        maxDivisor = 7;
    } else if (num % 6 === 0) {
        maxDivisor = 6;
    } else if (num % 3 === 0) {
        maxDivisor = 3;
    } else if (num % 2 === 0) {
        maxDivisor = 2;
    }

    if (maxDivisor === 1) {
        console.log("Not divisible");
    } else {
        console.log(`The number is divisible by ${maxDivisor}`);
    }
}

division(30);
division(15);
division(12);
division(1643);