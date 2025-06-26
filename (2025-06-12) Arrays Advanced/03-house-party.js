function houseParty (commandsArr) {
    let guestsList = [];

    for (let command of commandsArr) {
        if (command.includes(" is going!")) {
            let guestName = command.split(' ')[0];

            if (guestsList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
                continue;
            }

            guestsList.push(guestName);

        } else if (command.includes(" is not going!")) {
            let guestName = command.split(' ')[0];

            if (!guestsList.includes(guestName)) {
                console.log(`${guestName} is not in the list!`);
                continue;
            }

            guestsList.splice(guestsList.indexOf(guestName), 1);
        }
    }

    console.log(guestsList.join("\n"));
}
houseParty([
    "Allie is going!",
    "George is going!",
    "John is not going!",
    "George is not going!"
]);

houseParty([
    "Tom is going!",
    "Annie is going!",
    "Tom is going!",
    "Garry is going!",
    "Jerry is going!"
]);