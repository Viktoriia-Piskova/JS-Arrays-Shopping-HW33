'use strict'
//create product list

class Product {
    constructor(name, price, amount, bought) {
        Object.assign(this, { name, price, amount, bought })
    }

    productItemSum() {
        return this.price * this.amount;
    }

    addProductToCart() {
        this.bought = true;
        this.amount += 1;
        reloadOneProduct(this)
        countProductsInCart();
    }

    deleteFromCart() {
        this.bought = false;
        this.amount = 0;
        reloadOneProduct(this)
        countProductsInCart();
    }
}


const apples = new Product("Apples", 5, 1, true);
const bananas = new Product("Bananas", 10, 0, false);
const nuts = new Product("Nuts", 300, 0, false);
const oranges = new Product("Oranges", 12, 0, false);
const watermelons = new Product("Watermelons", 150, 0, false);

const allProductsList = [apples, bananas, nuts, oranges, watermelons];

let currentTableContent = document.querySelector('#cartTable');

let cart = [];

createProductsLayout();
countProductsInCart();




//create layout for loading products from scratch

function createProductsLayout() {

    let scratch = document.querySelector('#allProductsList');
    scratch.innerHTML = '';

    for (let i = 0; i < allProductsList.length; i++) {

        let item = allProductsList[i];

        scratch.innerHTML += `<div class="productItem" id="${allProductsList[i].name}"></div>`
        document.querySelector(`#shop`).addEventListener('click', () => {reloadOneProduct(allProductsList[i])});

        reloadOneProduct(item);
    }
}




//reloading of each product separately

function reloadOneProduct(object) {

    let productCard = document.querySelector(`#${object.name}`);

    productCard.innerHTML = `<div class="productItemDescription">
                <ul>
                    <li class="productName">Name: <span class="itemName itemMainInfo"> ${object.name}</span> </li>
                    <li class="productPrice">Price: <span class="itemPrice itemMainInfo">${object.price}</span>$</li>
                    <li class="productAmount">Amount: <span class="itemAmount itemMainInfo">${object.amount}</span></li>
                    <li class="productItemSum">Total: <span class="temName itemMainInfo">${object.productItemSum()}</span>$</li>
                </ul>
            </div>
            <div class="productItemOptions">
                   
            </div>
        </ul>`

    if (object.amount <= 0) {
        productCard.classList.add("productNotAdded");
    }
    else {
        productCard.classList.remove("productNotAdded");
    }

    let parent = document.querySelector(`#${object.name}`);

    let addBtn = document.createElement("button");
    addBtn.innerHTML = "Add more!";
    addBtn.className = "addProduct";
    parent.querySelector('.productItemOptions').appendChild(addBtn);
    addBtn.addEventListener('click', () => { object.addProductToCart() }, false)

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.className = "deleteProduct";
    parent.querySelector('.productItemOptions').appendChild(delBtn);
    delBtn.addEventListener('click', () => { object.deleteFromCart() })
}



//array for cart
function countProductsInCart() {

    cart = [];
    let cartSum = 0;

    for (let j = 0; j < allProductsList.length; j++) {
        if (allProductsList[j].bought == true) {
            cart.push(allProductsList[j]);
            cartSum += allProductsList[j].productItemSum();
        }
    }
    document.querySelector('#userTotalCheck').innerHTML = cartSum;

    addProductInTable(cart)
}

function addProductInTable() {
    currentTableContent.innerHTML = '';
    let tableContent = '';
    for (let k = 0; k < cart.length; k++) {

        tableContent += `
            <tr>
            <td>${cart[k].name}</td>
            <td>${cart[k].price}$</td>
            <td>${cart[k].amount}</td>
            <td>${cart[k].productItemSum()}$</td>
            </tr>`
    }

    currentTableContent.innerHTML = tableContent;
}

//sorting products

document.querySelector('#sortByPriceLowestFirst').addEventListener('click', () => { displayCheapestFirst(allProductsList) });
document.querySelector('#sortByPriceHighestFirst').addEventListener('click', () => { displayExpensiveFirst(allProductsList) });


function displayCheapestFirst(arr) {

    function cheapestFirst(a, b) {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    }
    arr.sort(cheapestFirst);
    createProductsLayout();
}

function displayExpensiveFirst(arr) {

    function expensiveFirst(a, b) {
        if (a.price > b.price) {
            return -1;
        }
        if (a.price < b.price) {
            return 1;
        }
        return 0;
    }
    arr.sort(expensiveFirst);
    createProductsLayout();
}














