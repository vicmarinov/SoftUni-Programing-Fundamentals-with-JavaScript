function softUniBarIncome (commandsArr) {
    const commandPattern = /%(?<customerName>[A-Z][a-z]*)%.*<(?<product>\w+)>.*\|(?<quantity>\d+)\|\D*(?<price>\d+(\.\d+)?)\$/g;

    let totalIncome = 0;

    for (let command of commandsArr) {
        if (command === "end of shift") break;

        let commandMatchArr = Array.from(command.matchAll(commandPattern));
        if (commandMatchArr.length === 0) continue;

        let customerName = commandMatchArr[0].groups.customerName;
        let product = commandMatchArr[0].groups.product;
        let quantity = Number(commandMatchArr[0].groups.quantity);
        let price = Number(commandMatchArr[0].groups.price);
        
        let customerCost = quantity * price;

        totalIncome += customerCost;
        console.log(`${customerName}: ${product} - ${customerCost.toFixed(2)}`);
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);

softUniBarIncome([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"
]);