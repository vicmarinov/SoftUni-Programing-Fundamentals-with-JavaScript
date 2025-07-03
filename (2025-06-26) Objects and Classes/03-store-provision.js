function printStoreProvision (currentStockArr, deliveriesArr) {
    let store = {};

    for (let i = 0; i < currentStockArr.length - 1; i += 2) {
        let product = currentStockArr[i];
        let quantity = Number(currentStockArr[i + 1]);

        store[product] = quantity;
    }

    for (let i = 0; i < deliveriesArr.length - 1; i += 2) {
        let product = deliveriesArr[i];
        let quantity = Number(deliveriesArr[i + 1]);

        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }

    // Alternative:
    // -----------

    // for (let [product, quantity] of Object.entries(store)) {
    //     console.log(`${product} -> ${quantity}`);
    // }
}

printStoreProvision(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

printStoreProvision(
    ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
    ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);