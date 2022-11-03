const incrementCount = document.getElementById("increment-count")
const decrementCount = document.getElementById("decrement-count")
const incrementedCart = document.getElementById("add-to-cart")
const showCartContent = document.getElementById("cart")
const clearCartContent = document.getElementById("clear-cart")
const showImagesFull = document.getElementById("product-full-image")
const closeButton = document.getElementById("closebutton")
const nextButton = document.getElementById("next-button")
const prevButton = document.getElementById("prev-button")

let totalCart = document.getElementById("totalCart");
let count = 0;
totalCart.innerHTML = count;
let itemcount = 0;
let itemsprice = 0;
let itemcountfull = "Your cart is empty.";
let itemname = "";
let currentimage = 1;
let imglist = ["../images/image-product-1.jpg"]

let cartcount = document.getElementById("item-count-cart");
cartcount.innerHTML = itemcount;
let cartitemname = document.getElementById("item-name-cart");
cartitemname.innerHTML = itemname;
let cartfullcontent = document.getElementById("item-price-quantity");
cartfullcontent.innerHTML = itemcountfull;

let clearcart = document.getElementById("clear-cart");
let checkoutbutton = document.getElementById("checkout-button");
let cartproductimg = document.getElementById("cart-product-image");

let fullimage = document.getElementById("product-full-image");
let fullimagepop = document.getElementById("product-full-image-popup");
let smallimgx = document.getElementById(`img-small-${currentimage}`);
smallimgx.style.filter = "brightness(0.25)";
let smallimgx1 = document.getElementById(`img-small-${currentimage-1}`);
let smallimgx2 = document.getElementById(`img-small-${currentimage+1}`);


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
    cartproductimg = document.getElementById("cart-product-image").style.display = "block";
};

const showCart = () => {
    $(".shopping-cart").fadeToggle( "fast");
}

const showImages = () => {
    $(".product-images-popup").fadeToggle( "fast");
}

const closeImages = () => {
    $(".product-images-popup").fadeToggle( "fast");
}

const nextImage = () => {
    smallimgx = document.getElementById(`img-small-${currentimage}`);
    smallimgx.style.filter = "brightness(1)";
    currentimage += 1;
    if (currentimage > 4) {
        currentimage = 1;
    }
    fullimage.src = `../images/image-product-${currentimage}.jpg`;
    fullimagepop.src = `../images/image-product-${currentimage}.jpg`;
    smallimgx = document.getElementById(`img-small-${currentimage}`);
    smallimgx.style.filter = "brightness(0.25)";
}

const prevImage = () => {
    smallimgx = document.getElementById(`img-small-${currentimage}`);
    smallimgx.style.filter = "brightness(1)";
    currentimage -= 1;
    if (currentimage < 1) {
        currentimage = 4;
    }
    fullimage.src = `../images/image-product-${currentimage}.jpg`;
    fullimagepop.src = `../images/image-product-${currentimage}.jpg`;
    smallimgx = document.getElementById(`img-small-${currentimage}`);
    smallimgx.style.filter = "brightness(0.25)";
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
    cartproductimg = document.getElementById("cart-product-image").style.display = "none";
}

incrementCount.addEventListener("click", buttonIncrement);
decrementCount.addEventListener("click", buttonDecrement);
incrementedCart.addEventListener("click", incrementCart);
showCartContent.addEventListener("click", showCart);
clearCartContent.addEventListener("click", clearCart);
showImagesFull.addEventListener("click", showImages);
closeButton.addEventListener("click", closeImages);
nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);