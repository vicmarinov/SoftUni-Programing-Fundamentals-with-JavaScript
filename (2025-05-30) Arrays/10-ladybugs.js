function ladybugs (inputArray) {
    // Get the initial information from the inputArray
    let fieldSize = inputArray[0];
    let ladybugInitialIndices = inputArray[1].split(' ');

    // Create a field without any ladybugs
    let field = [];
    for (let i = 1; i <= fieldSize; i++) {
        field.push(0);
    }

    // Fill the field with the ladybugs
    for (let ladybugIndex of ladybugInitialIndices) {
        ladybugIndex = Number(ladybugIndex);
        if (ladybugIndex >= 0 && ladybugIndex < field.length) {
            field[ladybugIndex] = 1;
        }
    }

    // Iterate through the ladybugs' movements
    for (let i = 2; i < inputArray.length; i++) { // The first 2 elements of the inputArray are
                                                  // the fieldSize and the ladybugInitialIndices,
                                                  // and we iterate through the other elements.

        // Get the command information from the inputArray
        let [ladyBugIndex, direction, flyingLength] = inputArray[i].split(' ');
        ladyBugIndex = Number(ladyBugIndex);
        flyingLength = Number(flyingLength);

        // Make some data validation
        if (field[ladyBugIndex] === 0 || ladyBugIndex < 0 || ladyBugIndex >= field.length) {
            continue;
        }

        // If the ladybug is flying to the left side of the field, its index is decreasing, and the opposite.
        let directionCoefficient = direction === "left" ? -1 : 1;
        let ladyBugDestinationIndex = ladyBugIndex + directionCoefficient * flyingLength;

        // Make the logics of the movement
        field[ladyBugIndex] = 0; // ladybug is flying up

        let canContinueFlying = ladyBugDestinationIndex >= 0 && ladyBugDestinationIndex < field.length;

        while (canContinueFlying) {
            // Try to fly down to the destination
            if (field[ladyBugDestinationIndex] === 0) {
                field[ladyBugDestinationIndex] = 1;
                break;
            } else {
                // Update the destination if the destination is occupied
                ladyBugDestinationIndex += directionCoefficient * flyingLength; // If the ladybug lands on a fellow ladybug,
                                                                                // it continues to fly in the same direction
                                                                                // BY THE SAME LENGTH (!!!).
                canContinueFlying = ladyBugDestinationIndex >= 0 && ladyBugDestinationIndex < field.length;
            }
        }
    }

    // Print the result on the console
    console.log(field.join(' '));
}

ladybugs([ 3, "0 1", "0 right 1", "2 right 1" ]);
ladybugs([ 3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladybugs([ 5, "3", "3 left 2", "1 left -2"]);