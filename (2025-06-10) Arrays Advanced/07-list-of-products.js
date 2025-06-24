function printListOfProducts (productsArr) {
    let listOfProducts = productsArr
        .sort()
        // Alternative:
        // .sort((a, b) => a.localeCompare(b))
        .map((value, index) => `${index + 1}.${value}`);
    
    console.log(listOfProducts.join("\n"));
}

printListOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
printListOfProducts(['Watermelon', 'Banana', 'Apples']);