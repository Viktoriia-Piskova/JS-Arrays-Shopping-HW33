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
        reloadProduct(this)
        countProductsInCart();


    }

    deleteFromCart() {
        this.bought = false;
        this.amount = 0;
        reloadProduct(this)
        countProductsInCart();

    }
}


const apples = new Product("Apples", 5, 10, true);
const bananas = new Product("Bananas", 10, 2, false);
const nuts = new Product("Nuts", 10, 50, false);
const oranges = new Product("Oranges", 12, 3, false);
const watermelons = new Product("Watermelons", 150, 1, true);

const allProductsList = [apples, bananas, nuts, oranges, watermelons];

//array fo bought prod  cart todo

const cart = [];

function countProductsInCart() {
    let cartSum = 0;

    for (let j = 0; j < allProductsList.length; j++) {
        if (allProductsList[j].bought == true) {
            cart.push(allProductsList[j]);
            cartSum += allProductsList[j].productItemSum();
        }
    }

    document.querySelector('#userTotalCheck').innerHTML = cartSum;
}




//create products layout

function createProductsLayout() {


    for (let i = 0; i < allProductsList.length; i++) {

        let item = allProductsList[i];

        document.querySelector('#allProductsList').innerHTML += `<div class="productItem" id="${allProductsList[i].name}"></div>`
        document.querySelector(`#shop`).addEventListener('click', () => {reloadProduct(allProductsList[i])});

        reloadProduct(item);

        //     <div class="productItemDescription">
        //         <ul>
        //             <li class="productName">Name: <span class="itemName itemMainInfo"> ${allProductsList[i].name}</span> </li>
        //             <li class="productAmount">Amount: <span class="itemAmount itemMainInfo">${allProductsList[i].amount}</span></li>
        //             <li class="productPrice">Price: <span class="itemPrice itemMainInfo">${allProductsList[i].price}</span></li>
        //             <li class="productBought">Added: <span class="itemBought itemMainInfo">${allProductsList[i].bought}</span></li>
        //             <li class="productItemSum">Total: <span class="temName itemMainInfo">${allProductsList[i].productItemSum()}</span>$</li>
        //         </ul>
        //     </div>
        //     <div class="productItemOptions">
        //       <button class="addProduct1 id="${item.name} ${allProductsList[i].price}">Change</button>
        //     </div>
        // </div>`

        // // let parent = document.querySelector(`#${item.name}`);
       
        // // let changeBtn = document.createElement("button");
        // // changeBtn.innerHTML = "changeBtn";
        // // changeBtn.className = "changeBtn";
        
        // // parent.querySelector('.productItemOptions').appendChild(changeBtn);
        
        // // let obj = document.querySelector(`#${allProductsList[i].name}`)
        // // obj.addEventListener('click', () => alert(allProductsList[i].name), false);

        
    }
}


function reloadProduct(item) {

    document.querySelector(`#${item.name}`).innerHTML = `<div class="productItemDescription">
                <ul>
                    <li class="productName">Name: <span class="itemName itemMainInfo"> ${item.name}</span> </li>
                    <li class="productAmount">Amount: <span class="itemAmount itemMainInfo">${item.amount}</span></li>
                    <li class="productPrice">Price: <span class="itemPrice itemMainInfo">${item.price}</span></li>
                    <li class="productBought">Added: <span class="itemBought itemMainInfo">${item.bought}</span></li>
                    <li class="productItemSum">Total: <span class="temName itemMainInfo">${item.productItemSum()}</span>$</li>
                </ul>
            </div>
            <div class="productItemOptions">
                   
            </div>
        </ul>`

    let parent = document.querySelector(`#${item.name}`);

        let addBtn = document.createElement("button");
        addBtn.innerHTML = "Add to cart RL"; 
        addBtn.className = "addProduct";
        parent.querySelector('.productItemOptions').appendChild(addBtn);
        addBtn.addEventListener('click', () => { item.addProductToCart() })

        let delBtn = document.createElement("button");
        delBtn.innerHTML = "Delete RL";
        delBtn.className = "deleteProduct";
        parent.querySelector('.productItemOptions').appendChild(delBtn);
        delBtn.addEventListener('click', () => { item.deleteFromCart() })
}


createProductsLayout();


countProductsInCart();








