function starEnigma (inputArr) {
    function findCipherKey (encryptedMessage) {
        let keyCharsRegExpr = /s|t|a|r|S|T|A|R/g;

        if (keyCharsRegExpr.test(encryptedMessage)) {
            return encryptedMessage.match(keyCharsRegExpr).length;
        } else {
            return 0;
        }
    }

    function decryptMessage (encryptedMessage) {
        let result = "";
        let cipherKey = findCipherKey(encryptedMessage);

        for (let char of encryptedMessage) {
            result += String.fromCharCode(char.charCodeAt(0) - cipherKey);
        }

        return result;
    }

    const messagePattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>A|D)![^@\-!:>]*->(?<numberOfSoldiers>\d+)/g;

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let command of inputArr.slice(1, Number(inputArr[0]) + 1)) {
        let decryptedMessage = decryptMessage(command);

        let decryptedMessageMatchArr = Array.from(decryptedMessage.matchAll(messagePattern));
        if (decryptedMessageMatchArr.length === 0) continue;

        let planetName = decryptedMessageMatchArr[0].groups.planetName;
        let population = Number(decryptedMessageMatchArr[0].groups.population); // It's actually not used anywhere
        let attackType = decryptedMessageMatchArr[0].groups.attackType;
        let numberOfSoldiers = Number(decryptedMessageMatchArr[0].groups.numberOfSoldiers); // It's actually not used anywhere

        switch (attackType) {
            case "A": attackedPlanets.push(planetName);  break;
            case "D": destroyedPlanets.push(planetName); break;
        }
    }

    attackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    for (let planetName of attackedPlanets) {
        console.log(`-> ${planetName}`);
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    for (let planetName of destroyedPlanets) {
        console.log(`-> ${planetName}`);
    }
}

starEnigma([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);