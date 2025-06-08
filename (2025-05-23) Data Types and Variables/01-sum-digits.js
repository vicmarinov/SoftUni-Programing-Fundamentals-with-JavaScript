function sumDigits (num) {
    let remainingPart = num;
    let digitsSum = 0;
    
    while (remainingPart > 0) {
        digitsSum += remainingPart % 10;
        remainingPart = parseInt(remainingPart / 10);
    }

    console.log(digitsSum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);