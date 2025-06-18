function orders (product, quantity) {
    // Price list
    // ----------
    // coffee: 1.50 leva
    // water:  1.00 leva
    // coke:   1.40 leva
    // snacks: 2.00 leva

    let totalPrice;

    switch (product) {
        case "coffee":
            totalPrice = quantity * 1.50;
            break;
        case "water":
            totalPrice = quantity * 1.00;
            break;
        case "coke":
            totalPrice = quantity * 1.40;
            break;
        case "snacks":
            totalPrice = quantity * 2.00;
            break;
    }

    console.log(totalPrice.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);