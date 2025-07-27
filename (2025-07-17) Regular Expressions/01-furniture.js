function furniture (commandsArr) {
    const commandPattern = />>(?<furnitureName>[A-Z].*)<<(?<price>\d+(\.\d*)?)!(?<quantity>\d+)/g;

    let furnitureNamesArr = [];
    let totalCost = 0;

    for (let command of commandsArr) {
        if (command === "Purchase") break;
        
        let commandMatchArr = Array.from(command.matchAll(commandPattern));
        if (commandMatchArr.length === 0) continue;

        let furnitureName = commandMatchArr[0].groups.furnitureName;
        let price = Number(commandMatchArr[0].groups.price);
        let quantity = Number(commandMatchArr[0].groups.quantity);

        furnitureNamesArr.push(furnitureName);
        totalCost += price * quantity;
    }

    console.log(["Bought furniture:", ...furnitureNamesArr].join("\n"));
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture([
    ">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"
]);

furniture([
    ">>Laptop<<312.2323!3",
    ">>TV<<300.21314!5",
    ">Invalid<<!5",
    ">>TV<<300.21314!20",
    ">>Invalid<!5",
    ">>TV<<30.21314!5",
    ">>Invalid<<!!5",
    "Purchase"
]);

furniture([
    ">Invalid<<!4",
    ">Invalid<<!2",
    ">Invalid<<!5",
    "Purchase"
]);