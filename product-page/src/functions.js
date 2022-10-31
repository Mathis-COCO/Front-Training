const incrementCount = document.getElementById("increment-count")
const decrementCount = document.getElementById("decrement-count")
const incrementedCart = document.getElementById("add-to-cart")

let totalCart = document.getElementById("totalCart");
let count = 0;
totalCart.innerHTML = count;
let itemcount = 0;
let itemsprice = 0;
let itemcountfull = "aaa";

let testcartsize = document.getElementById("test-cart-size");
testcartsize.innerHTML = itemcountfull;

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
    itemcountfull = `${document.getElementById("item-name").innerHTML} ($${document.getElementById("item-price").innerHTML}) x ${itemcount} _______________ cart price : $${itemsprice}`;
    testcartsize.innerHTML = itemcountfull;
};

incrementCount.addEventListener("click", buttonIncrement);
decrementCount.addEventListener("click", buttonDecrement);
incrementedCart.addEventListener("click", incrementCart);