const incrementCount = document.getElementById("increment-count")
const decrementCount = document.getElementById("decrement-count")
const incrementedCart = document.getElementById("add-to-cart")
const showCartContent = document.getElementById("cart")
const clearCartContent = document.getElementById("clear-cart")

let totalCart = document.getElementById("totalCart");
let count = 0;
totalCart.innerHTML = count;
let itemcount = 0;
let itemsprice = 0;
let itemcountfull = "Your cart is empty.";
let itemname = "";

let cartcount = document.getElementById("item-count-cart");
cartcount.innerHTML = itemcount;
let cartitemname = document.getElementById("item-name-cart");
cartitemname.innerHTML = itemname;
let cartfullcontent = document.getElementById("item-price-quantity");
cartfullcontent.innerHTML = itemcountfull;

let clearcart = document.getElementById("clear-cart");
let checkoutbutton = document.getElementById("checkout-button");


const buttonIncrement = () => {
    count++;
    totalCart.innerHTML = count;
};

const buttonDecrement = () => {
    if (count>0) {count--;}
    totalCart.innerHTML = count;
};

// add item to cart - changes cart amount value
const incrementCart = () => {
    itemcount += count;
    itemsprice += count*parseInt(document.getElementById("item-price").innerHTML);
    itemname = document.getElementById("item-name").innerHTML;
    itemcountfull = `$${document.getElementById("item-price").innerHTML} x ${itemcount} $${itemsprice}`;
    cartcount.innerHTML = itemcount;
    cartfullcontent.innerHTML = itemcountfull;
    cartitemname.innerHTML = itemname;
    clearcart = document.getElementById("clear-cart").style.display = "block";
    checkoutbutton = document.getElementById("checkout-button").style.display = "block";
};

const showCart = () => {
    $(".shopping-cart").fadeToggle( "fast");
}

const clearCart = () => {
    itemcount = 0;
    itemname = "";
    itemcountfull = "Your cart is empty.";
    cartfullcontent.innerHTML = itemcountfull;
    cartitemname.innerHTML = itemname;
    cartcount.innerHTML = itemcount;
    clearcart = document.getElementById("clear-cart").style.display = "none";
    checkoutbutton = document.getElementById("checkout-button").style.display = "none";
}

incrementCount.addEventListener("click", buttonIncrement);
decrementCount.addEventListener("click", buttonDecrement);
incrementedCart.addEventListener("click", incrementCart);
showCartContent.addEventListener("click", showCart);
clearCartContent.addEventListener("click", clearCart);