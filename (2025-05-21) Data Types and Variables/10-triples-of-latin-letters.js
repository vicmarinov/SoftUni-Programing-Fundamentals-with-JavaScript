function triplesOfLatinLetters (numN) {
    for (let i = 0; i < numN; i++) {
        for (let j = 0; j < numN; j++) {
            for (let k = 0; k < numN; k++) {
                let charFirst  = String.fromCharCode(97 + i);
                let charSecond = String.fromCharCode(97 + j);
                let charThird  = String.fromCharCode(97 + k);

                console.log(`${charFirst}${charSecond}${charThird}`);
            }
        }
    }
}

triplesOfLatinLetters('3');
triplesOfLatinLetters(2);