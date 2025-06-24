function manipulateArray (inputArr) {
    let numsArr = inputArr[0]
        .split(' ')
        .map(Number);
    
    let commands = inputArr.slice(1);

    for (let command of commands) {
        command = command.split(' ');

        let commandType = command[0];
        let commandValues = command
            .slice(1)
            .map(Number);
        
        switch (commandType) {
            case "Add":
                numsArr.push(commandValues[0]);
                break;
            case "Remove":
                numsArr = numsArr.filter(x => x !== commandValues[0]);
                break;
            case "RemoveAt":
                numsArr.splice(commandValues[0], 1);
                break;
            case "Insert":
                numsArr.splice(commandValues[1], 0, commandValues[0]);
                break;
        }
    }

    console.log(numsArr.join(' '));
}

manipulateArray([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"
]);

manipulateArray([
    "6 12 2 65 6 42",
    "Add 8",
    "Remove 12",
    "RemoveAt 3",
    "Insert 6 2"
]);