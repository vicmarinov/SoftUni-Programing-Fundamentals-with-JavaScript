function specialNumbers (numN) {
    for (let numInTheRange1ToN = 1; numInTheRange1ToN <= numN; numInTheRange1ToN++) {
        let numInTheRange1ToNAsString = String(numInTheRange1ToN);
        let digitsSum = 0;
        for (let i = 0; i < numInTheRange1ToNAsString.length; i++) {
            digitsSum += Number(numInTheRange1ToNAsString[i]);
        }

        let isSpecialNumAsString = (digitsSum === 5 || digitsSum === 7 ||
                                    digitsSum === 11) ? "True" : "False";
        
        console.log(`${numInTheRange1ToN} -> ${isSpecialNumAsString}`);
    }
}

specialNumbers(15);
specialNumbers(20);