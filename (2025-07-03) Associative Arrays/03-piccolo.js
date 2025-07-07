function piccolo (commands) {
    let parkingLot = new Set();

    for (let command of commands) {
        let [commandType, carNumber] = command.split(", ");

        switch (commandType) {
            case "IN":
                parkingLot.add(carNumber);
                break;
            case "OUT":
                parkingLot.delete(carNumber);
                break;
        }
    }
    
    let result = "Parking Lot is Empty";

    if (parkingLot.size > 0) {
        result = Array.from(parkingLot)
            .sort((a, b) => a.localeCompare(b))
            .join("\n");
    }

    console.log(result);
}

piccolo([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU"
]);

piccolo([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "OUT, CA1234TA"
]);
