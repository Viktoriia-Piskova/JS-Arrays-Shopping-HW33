'use strict'


//create product list

class ProductItem {
    constructor(productName, productPrice, productAmount,productBought) {
        this.name = productName;
        this.price = productPrice;
        this.amount = productAmount;
        this.bought = productBought;
    }

    addProduct(){
        return this.bought = true;
    }
    deleteProduct(){
        return this.bought = false;
    }
}

function testProduct(param){
    alert `returned${param}`;
}

const apples = new Product("Apples", 5, 10, true);
const bananas = new Product("Bananas", 10, 2, true);
const nuts = new Product("Nuts", 10, 50, true);
const oranges = new Product("Oranges", 12, 3, false);
const watermelons = new Product("Watermelons", 150, 1, true);

const allProductsList = [apples, bananas, nuts, oranges, watermelons];



//create products layout

function productItemSum(price, amount, bought) {
    if (bought === true){
    return price * amount;}

    else if(bought === false){
        return "Not added";
    }
}


function createProductsLayout(){
    for (let i = 0; i < allProductsList.length; i++){
        let product = allProductsList[i];
        let nameForCard = product.name;
        let amountForCard = allProductsList[i].amount;
        let priceForCard = allProductsList[i].price;
        let boughtForCard = allProductsList[i].bought;

        let ulProductItem = document.createElement('ul');
        ulProductItem.className = "productItem";
        document.querySelector('#allProductsList').appendChild(ulProductItem);

        let productItemDescription = document.createElement('li');
        productItemDescription.className = "productItemDescription";
        ulProductItem.appendChild(productItemDescription);

        let productItemOptions = document.createElement('li');
        productItemOptions.className = "productItemOptions";
        ulProductItem.appendChild(productItemOptions);

        let ul = document.createElement('ul')
        productItemDescription.appendChild(ul);

        let productName = document.createElement('li');
        productName.className = nameForCard;
        productName.innerHTML = nameForCard;
        ul.appendChild(productName);




        
    //     document.querySelector('#allProductsList').innerHTML += `
    // <ul class="productItem" >
    //     <li class="productItemDescription">
    //         <ul>
    //             <li class="productName" >Name: <span class="itemName itemMainInfo"> ${nameForCard}</span> </li>
    //             <li class="productAmount">Amount: <span class="itemAmount itemMainInfo">${amountForCard}</span></li>
    //             <li class="productPrice">Price: <span class="itemPrice itemMainInfo">${priceForCard}</span></li>
    //             <li class="productBought">Added: <span class="itemBought itemMainInfo">${boughtForCard}</span></li>
    //         </ul>
    //     </li>
    //     <li class="productItemOptions" >
    //         <ul id="${nameForCard}">
    //             <li class="productItemSum">Total: <span class="temName itemMainInfo">${productItemSum(priceForCard, amountForCard, boughtForCard)}</span>$</li>
    //             <li>${createAddButton()}</li>
    //             <li><button class="deleteProduct" >Delete</button> </li>
    //         </ul>
    //     </li>
    // </ul>`
    }
}

createProductsLayout();





//functions and events for adding and deleting products

function createAddButton(){
    let addBtn = document.createElement("button");
    addBtn.innerHTML = "Add to cart";
    addBtn.className = "addProduct";
    addBtn.addEventListener("click", testProduct);
    return addBtn;
    // document.getElementById(`${parentElement}`).appendChild(addBtn);
}

createAddButton("Apples");



