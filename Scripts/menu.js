const productMainContainer = document.querySelector(".product-main-container");
// var productContainer = document.querySelector(".product-container");
let cardContainer = document.querySelector(".card-container");
var currentDisplay = 0;


var selectedItems = [];
var quantityOfItems = [];
var priceOfItems = [];


var orderBtn = document.querySelector(".product-button");


var quantity = document.querySelector(".product-quantity");

// var prodDescription = document.querySelector(".product-description");

var itemCategory;


const bestSellerBtn = document.querySelector(".best-seller-button").addEventListener("click", displayContent);
const mainCourseBtn = document.querySelector(".main-course-button").addEventListener("click", displayContent);
const breakfastBtn = document.querySelector(".breakfast-button").addEventListener("click", displayContent);
const cakeBtn = document.querySelector(".cake-button").addEventListener("click", displayContent);
const snacksBtn = document.querySelector(".snacks-button").addEventListener("click", displayContent);
const kiddieMenuBtn = document.querySelector(".kiddie-menu-button").addEventListener("click", displayContent);
const drinksBtn = document.querySelector(".drinks-button").addEventListener("click", displayContent);


let priceDisplay = document.querySelector(".total-price-display");


const modal = document.querySelector(".modal")
const modalContent = document.querySelector(".inner-modal-content");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");

//OPEN MODAL
openModalBtn.addEventListener("click", startModal);

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if(event.target === modal){
        modal.style.display = "none";
    }
});

// function startModal(){
//     modalContent.textContent = " ";
//     if(selectedItems.length === 0){
//         let empMessage = document.querySelector("p");
//         empMessage.textContent = "There are currently no items selected"
//         modalContent.appendChild(empMessage);
//     }else{
//     for(let i = 0; i < selectedItems.length; i++){
//         let selectedProductDiv = document.createElement("div");
//         selectedProductDiv.classList.add("selected-product-container")
//         let selectedProduct = document.createElement("p");
//         selectedProduct.textContent = `(${quantityOfItems[i]}) ${selectedItems[i]} \u20B1 ${priceOfItems[i].toFixed(2)}`;
//         selectedProductDiv.appendChild(selectedProduct);

//         let removeBtn = document.createElement("button");
//         removeBtn.setAttribute("value", selectedItems[i]);
//         removeBtn.textContent = "Remove";
//         removeBtn.addEventListener("click", removeItem);
//         selectedProductDiv.appendChild(removeBtn);

//         modalContent.appendChild(selectedProductDiv);
//         // console.log(selectedItems[i], priceOfItems[i]);
//     }
// }


//     modal.style.display = "block";
// }

function startModal() {
    modalContent.textContent = " "; // Clear modal content

    if (selectedItems.length === 0) {
        let empMessage = document.createElement("p");
        empMessage.textContent = "There are currently no items selected"
        modalContent.appendChild(empMessage);
    } else {
        for (let i = 0; i < selectedItems.length; i++) {
            let selectedProductDiv = document.createElement("div");
            selectedProductDiv.classList.add("selected-product-container");
            let selectedProduct = document.createElement("p");
            selectedProduct.textContent = `(${quantityOfItems[i]}) ${selectedItems[i]} \u20B1 ${priceOfItems[i].toFixed(2)}`;
            selectedProductDiv.appendChild(selectedProduct);

            let removeBtn = document.createElement("button");
            removeBtn.setAttribute("value", selectedItems[i]);
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener("click", removeItem);
            selectedProductDiv.appendChild(removeBtn);

            modalContent.appendChild(selectedProductDiv);
        }
    }

    modal.style.display = "block";
}



function displayContent(event){
    event.preventDefault();
    currentDisplay = event.target.id;
    itemCategory = products[currentDisplay];
    while (productMainContainer.firstChild) {
        productMainContainer.removeChild(productMainContainer.firstChild);
    }
    for(let i = 0; i < itemCategory.length; i++){

        let card = document.createElement("div");
        card.classList.add("product-container");

        let img = document.createElement("img");
        img.src = itemCategory[i].productImg;
        card.appendChild(img);

        let prodName = document.createElement("h3");
        prodName.textContent = itemCategory[i].productName;
        card.appendChild(prodName);

        let price = document.createElement("p");
        price.textContent = ("\u20B1 " + itemCategory[i].productPrice.toFixed(2));
        card.appendChild(price);

        let prodDescription = document.createElement("p");
        prodDescription.textContent = itemCategory[i].description;
        card.appendChild(prodDescription);

        orderBtn = document.createElement("button");
        orderBtn.value = itemCategory[i].productPrice;
        orderBtn.textContent = ("Select");
        orderBtn.id = i;
        orderBtn.addEventListener("click", addItem);
        card.appendChild(orderBtn);

        // quantity = document.createElement("input");
        // quantity.setAttribute("type", "number");
        // quantity.setAttribute("min", 1);
        // // quantity.id = i;
        // quantity.classList.add(".quantity-input");
        // // quantity.type = "number";
        // // quantity.min = 1;
        // // quantity.value = quantity.setAttribute("value", quantity.value);
        // card.appendChild(quantity);

        productMainContainer.appendChild(card);
    }
}

// var quantity;

// var testing = document.querySelector(".product-main-container");

// testing.addEventListener("click", (event) => {
//     if(event.target.tagName == "BUTTON"){
//         var x = event.target.closest("div");
        
//         quantity = x.querySelector(".quantity-input").value;
//     } 
// });

// function previewDisplay(){
//     let display = document.querySelector(".prev-display");
//     //OTHER WAYS : &#8369; U+20B1
//     display.textContent = ("&#x20B1;" + totalPrice);

// }



//ADDS ITEM TO THE selectedItems array
//THIS IS FOR THE "SELECT" BUTTON FOR EACH PRODUCT THAT WILL BE DISPLAYED
function addItem(event){
    let selectedItem = event.target.id;
    // let itemCategory = itemCategory;

    let selectedCateg = itemCategory;

    // let setValue = getValue();
    let nameOfProd = selectedCateg[selectedItem].productName;
    let priceOfProd = selectedCateg[selectedItem].productPrice;

    let forIndex = selectedItems.indexOf(nameOfProd);



//THE WAY THIS WORKS!!!!:
//products is an ARRAY CONTAINING THE DIFFERENT ARRAYS OF PRODUCT(THE CATEGORIES ARRAY),
//itemCategory HOLDS THE CLASS LIST OF THE BUTTON THAT WAS PRESSED, WHICH IS THE CORRESPONDING INDEX OF ITS CATEGORY IN THE PRODUCTS ARRAY
//THE selectedItem HOLDS THE ID OF THE BUTTON THAT WAS PRESSED, WHICH IS THE CORRESPONDING INDEX OF THE ITEM/PRODUCT IN THE CATEGORIES ARRAY
// WHAT I THINK WILL HAPPEN IS THIS


    //IT is found
    if(forIndex > -1){
        quantityOfItems[forIndex] += 1;
        priceOfItems[forIndex] += priceOfProd;
    }else{
        selectedItems[selectedItems.length++] =  nameOfProd;
        quantityOfItems[quantityOfItems.length++] = 1;
        priceOfItems[priceOfItems.length++] = priceOfProd;
    }

    // priceDisplay.textContent = ("Total: \u20B1 " + totalPrice());
    totalPrice();

}

//REMOVING ITEM TO THE selectedItems array
function removeItem(event){
    let toRemove = event.target.value;
    let indexToRemove = selectedItems.indexOf(toRemove);
    selectedItems.splice(indexToRemove, 1);
    priceOfItems.splice(indexToRemove, 1);
    quantityOfItems.splice(indexToRemove, 1);
    
    totalPrice();
    startModal();
}

//RETURNS THE TOTAL PRICE OF ALL THE ITEMS
function totalPrice(){
    let total = 0;
    priceOfItems.forEach(item => {
        total += item;
    });

    priceDisplay.textContent = ("Total: \u20B1 " + total.toFixed(2));
}
