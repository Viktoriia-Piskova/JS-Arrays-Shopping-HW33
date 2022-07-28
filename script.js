'use strict'


//create product list

class ProductItem {
    constructor(productName, productPrice, productAmount,productBought) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productAmount = productAmount;
        this.productBought = productBought;
    }
    productSum() {
        return this.productPrice * this.productAmount
    }
}


const apples = new ProductItem("Apples", 5, 10, true);
const bananas = new ProductItem("Bananas", 10, 2, true);
const nuts = new ProductItem("Nuts", 10, 50, true);
const oranges = new ProductItem("Oranges", 12, 3, true);
const watermelons = new ProductItem("Watermelons", 150, 1, true);

const allProductsList = [apples, bananas, nuts, oranges, watermelons];
