function dungeonestDark (inputString) {
    let health = 100;
    let coins = 0;

    let isAlive = true;

    let rooms = inputString.split('|');

    for (let i = 0; i < rooms.length; i++) {
        let [command, value] = rooms[i].split(' ');
        value = Number(value);

        switch (command) {
            case "potion":
                let healing = health + value > 100 ? 100 - health : value;
                health += healing;

                console.log(`You healed for ${healing} hp.`);
                console.log(`Current health: ${health} hp.`);

                break;
            case "chest":
                let coinsFound = value;
                coins += coinsFound;

                console.log(`You found ${coinsFound} coins.`);

                break;
            default:
                let monsterName = command;
                let monsterAttack = value;

                health -= monsterAttack;

                if (health > 0) {
                    console.log(`You slayed ${monsterName}.`);
                } else {
                    console.log(`You died! Killed by ${monsterName}.`);
                    console.log(`Best room: ${i + 1}`);

                    isAlive = false;
                }

                break;
        }

        if (!isAlive) {
            break;
        }
    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");