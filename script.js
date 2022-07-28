'use strict'


//create product list

class ProductItem {
    constructor(productName, productPrice, productAmount,productBought) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productAmount = productAmount;
        this.productBought = productBought;
    }
    productItemSum() {
        return this.productPrice * this.productAmount;
    }
    addProduct(){
        return this.productBought = true;
    }
    deleteProduct(){
        return this.productBought = false;
    }
}


const apples = new ProductItem("Apples", 5, 10, true);
const bananas = new ProductItem("Bananas", 10, 2, true);
const nuts = new ProductItem("Nuts", 10, 50, true);
const oranges = new ProductItem("Oranges", 12, 3, false);
const watermelons = new ProductItem("Watermelons", 150, 1, true);

const allProductsList = [apples, bananas, nuts, oranges, watermelons];

//create products layout

function createProductsLayout(){
    for (let i = 0; i < allProductsList.length; i++){
        document.querySelector('#allProductsList').innerHTML += `<ul class="productItem">
        <li class="productItemDescription">
            <ul>
                <li class="productName">Name: <span class="itemName itemMainInfo"> ${allProductsList[i].productName}</span> </li>
                <li class="productAmount">Amount: <span class="itemAmount itemMainInfo">${allProductsList[i].productAmount}</span></li>
                <li class="productPrice">Price: <span class="itemPrice itemMainInfo">${allProductsList[i].productPrice}</span></li>
                <li class="productBought">Added: <span class="itemBought itemMainInfo">${allProductsList[i].productBought}</span></li>
            </ul>
        </li>
        <li class="productItemOptions">
            <ul>
                <li class="productItemSum">Total: <span class="temName itemMainInfo">${allProductsList[i].productItemSum()}</span>$</li>
                <li><button class="addProduct">Add to cart</button></li>
                <li><button class="deleteProduct">Delete</button> </li>
            </ul>
        </li>
    </ul>`
    }
}

createProductsLayout();

//events for adding and deleting products



