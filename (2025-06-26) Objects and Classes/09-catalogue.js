function catalogue (catalogueArr) {
    let catalogue = {};

    for (let catalogueItem of catalogueArr) {
        let [productName, productPrice] = catalogueItem.split(" : ");
        catalogue[productName] = productPrice;
    }

    let namesOfProductsSorted = Object
        .keys(catalogue)
        .sort((a, b) => a.localeCompare(b));

    let currentLetter = ' ';
    for (productName of namesOfProductsSorted) {
        if (!productName.startsWith(currentLetter)) {
            currentLetter = productName[0];
            console.log(currentLetter);
        }

        console.log(`  ${productName}: ${catalogue[productName]}`);
    }
}

catalogue([
    "Apricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
]);

catalogue([
    "Omelette : 5.4",
    "Shirt : 15",
    "Cake : 59"
]);