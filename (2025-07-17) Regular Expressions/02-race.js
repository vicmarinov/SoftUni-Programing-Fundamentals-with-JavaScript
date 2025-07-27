function race (inputArr) {
    let raceLeaderboard = new Map();
    for (let participantName of inputArr[0].split(", ")) {
        raceLeaderboard.set(participantName, 0);
    }

    for (let command of inputArr.slice(1)) {
        if (command === "end of race") break;

        let name = command.match(/[A-Za-z]/g).join('');

        if (raceLeaderboard.has(name)) {
            let distance = 0;
            for (let num of command.match(/\d/g)) distance += Number(num);

            raceLeaderboard.set(name, raceLeaderboard.get(name) + distance);
        }
    }

    let winners = Array.from(raceLeaderboard)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(entry => entry[0]);

    console.log(`1st place: ${winners[0]}`);
    console.log(`2nd place: ${winners[1]}`);
    console.log(`3rd place: ${winners[2]}`);
}

race([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@ ",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"
]);

race([
    "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
    "Mi*&^%$ch123o!#$%#nne787) ",
    "%$$B(*&&)i89ll)*&) ",
    "R**(on%^&ald992) ",
    "T(*^^%immy77) ",
    "Ma10**$#g0g0g0i0e",
    "end of race"
]);