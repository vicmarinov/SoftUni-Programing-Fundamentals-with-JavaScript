function aMinerTask (inputArr) {
    let resources = new Map();

    for (let i = 0; i < inputArr.length; i += 2) {
        let resource = inputArr[i];
        let quantity = inputArr[i + 1];

        if (!resources.has(resource)) {
            resources.set(resource, Number(quantity));
        } else {
            resources.set(resource, resources.get(resource) + Number(quantity));
        }
    }

    for (let [resource, quantity] of resources) {
        console.log(`${resource} -> ${quantity}`);
    }
}

aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);