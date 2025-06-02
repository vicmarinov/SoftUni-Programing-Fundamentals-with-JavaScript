function triangleOfNumbers (end) {
    for (let rowNo = 1; rowNo <= end; rowNo++){
        let row = "";

        for (let i = 1; i <= rowNo; i++) {
            row += rowNo + " ";
        }

        console.log(row);
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);