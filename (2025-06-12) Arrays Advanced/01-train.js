function train (inputArr) {
    let wagonsPassengers = inputArr[0]
        .split(' ')
        .map(Number);
    let wagonMaxCapacity = Number(inputArr[1]);
    let commands = inputArr.slice(2);
    
    for (let command of commands) {
        if (command.includes("Add")) {
            let [_, newWagonPassengers] = command.split(' ');
            newWagonPassengers = Number(newWagonPassengers);

            wagonsPassengers.push(newWagonPassengers);
        } else {
            let passengersToAdd = Number(command);

            let wagonsSuitable = wagonsPassengers
                .filter(x => x + passengersToAdd <= wagonMaxCapacity);
            let wagonSuitableIndex = wagonsPassengers.indexOf(wagonsSuitable[0]);

            wagonsPassengers[wagonSuitableIndex] += passengersToAdd;
        }
    }
    
    console.log(wagonsPassengers.join(' '));
}

train([
    "32 54 21 12 4 0 23",
    "75",
    "Add 10",
    "Add 0",
    "30",
    "10",
    "75"
]);

train([
    "0 0 0 10 2 4",
    "10",
    "Add 10",
    "10",
    "10",
    "10",
    "8",
    "6"
]);