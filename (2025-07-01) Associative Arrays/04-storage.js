function solveStorageProblem (inputArr) {
    let storage = new Map();

    for (let command of inputArr) {
        let [product, quantity] = command.split(' ');
        quantity = Number(quantity);
        
        if (!storage.has(product)) {
            storage.set(product, quantity);
        } else {
            storage.set(product, storage.get(product) + quantity);
        }
    }

    for (let [product, quantity] of storage.entries()) {
        console.log(`${product} -> ${quantity}`);
    }
}

solveStorageProblem(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
solveStorageProblem(["apple 50", "apple 61", "coffee 115", "coffee 40"]);