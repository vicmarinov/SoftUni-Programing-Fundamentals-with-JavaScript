function netherRealms (demonsNamesList) {
    class Demon {
        constructor (name, health, damage) {
            this.name = name;
            this.health = health;
            this.damage = damage;
        }
    }
    
    function calculateDemonHealth (demonName) {
        let health = 0;

        for (let char of demonName.match(/[^0-9\+\-\*\/\.]/g)) {
            health += char.charCodeAt(0);
        }

        return health;
    }

    function calculateDemonDamage (demonName) {
        const numberPattern = /(\+|\-)?\d+(\.\d+)?/g;
        
        let numbers;
        if (numberPattern.test(demonName)) {
            numbers = demonName
                .match(/(\+|\-)?\d+(\.\d+)?/g)
                .map(Number);
        } else {
            numbers = [];
        }

        let damage = 0;
        for (let num of numbers) {
            damage += num;
        }

        let modificationCharsArr
        if (/\*|\//g.test(demonName)) {
            modificationCharsArr = demonName.match(/\*|\//g);
        } else  {
            modificationCharsArr = [];
        }

        for (let char of modificationCharsArr) {
            switch (char) {
                case '*': damage *= 2; break;
                case '/': damage /= 2; break;
            }
        }

        return damage;
    }

    let demonsNames = demonsNamesList.match(/[^,\s]+/g);
    let demonsBook = [];

    for (let name of demonsNames) {
        let health = calculateDemonHealth(name);
        let damage = calculateDemonDamage(name);

        demonsBook.push(new Demon(name, health, damage));
    }

    demonsBook = demonsBook.sort((demonA, demonB) => demonA.name.localeCompare(demonB.name));

    for (let demon of demonsBook) {
        console.log(`${demon.name} - ${demon.health} health, ${demon.damage.toFixed(2)} damage`);
    }
}

netherRealms("M3ph-0.5s-0.5t0.0**");
netherRealms("M3ph1st0**, Azazel");
netherRealms("Gos/ho");