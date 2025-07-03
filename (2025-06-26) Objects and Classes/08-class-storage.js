class Storage {
    constructor (capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct (product) {
        this.capacity -= product.quantity;
        this.storage.push(product);
        this.totalCost += product.price * product.quantity;
    }

    getProducts () {
        let productsAsJSON = [];
        
        for (let product of this.storage) {
            productsAsJSON.push(JSON.stringify(product));
        }

        return productsAsJSON.join("\n");
    }
}

// Test 1:
// ------

let productOne1 = {name: 'Cucumber', price: 1.50, quantity: 15};
let productTwo1 = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree1 = {name: 'Bread', price: 1.10, quantity: 8};
let storage1 = new Storage(50);
storage1.addProduct(productOne1);
storage1.addProduct(productTwo1);
storage1.addProduct(productThree1);
console.log(storage1.getProducts());
console.log(storage1.capacity);
console.log(storage1.totalCost);

// Test 2:
// ------

let productOne2 = {name: 'Tomato', price: 0.90, quantity: 19};
let productTwo2 = {name: 'Potato', price: 1.10, quantity: 10};
let storage2 = new Storage(30);
storage2.addProduct(productOne2);
storage2.addProduct(productTwo2);
console.log(storage2.totalCost);