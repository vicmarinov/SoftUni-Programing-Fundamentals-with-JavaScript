function inventory (inputArr) {
    class Hero {
        constructor (name, level, inventoryArr) {
            this.name = name;
            this.level = level;
            this.inventory = inventoryArr;
        }

        printHeroInfo () {
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.inventory.join(", ")}`);
        }
    }

    let heroes = [];

    for (let inputRow of inputArr) {
        let [heroName, heroLevel, heroInventory] = inputRow.split(" / ");
        heroLevel = Number(heroLevel);
        heroInventory = heroInventory.split(", ");

        heroes.push(new Hero(heroName, heroLevel, heroInventory));
    }

    heroes = heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        hero.printHeroInfo();
    }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);

inventory([
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara"
]);