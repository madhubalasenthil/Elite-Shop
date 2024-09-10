// search div
let search = document.getElementById('search-icon');
let searchDiv = document.getElementById('search-div');
search.addEventListener('click', () => {
    searchDiv.style.display = 'block';

});
// search close 
let searchCancel = document.getElementById('close');
searchCancel.addEventListener("click", () => {
    searchDiv.style.display = 'none';
});
// shop notification
let shopNotifie = document.getElementById('shop-notifie');
let cart = document.getElementById('cart');
shopNotifie.addEventListener("click", () => {
    cart.classList.add("active");

});
// shop notification cancel
let cancel = document.getElementById('cancel');
cancel.addEventListener("click", () => {
    cart.style.display = "none";
});



// loading fiunction
function loading() {
    document.getElementById('loading').style.display = 'flex';
    setTimeout(function () {
        document.getElementById('loading').style.display = 'none';

    }, 1500);
}


// order notification
let btnAddCart = document.querySelectorAll("#btn");
btnAddCart.forEach((btn) => {
    btn.addEventListener("click", addCart);
    btn.addEventListener("click",order);
    btn.addEventListener("click",loadContent);
   
   
})

function loadContent() {
    // remove product
    let remove = document.querySelectorAll("#cart-remove");
    remove.forEach((btn) => {
        btn.addEventListener("click", removeProduct)
    });


}

function removeProduct() {
    if (confirm("Are you sure to remove"))
        this.parentElement.remove();
}

// adddCart
function addCart() {
    let product = this.parentElement;
    let product1 = product.parentElement;
    let product2 = product1.parentElement;
    let title = product2.querySelector('.title').innerHTML;
    let price = product2.querySelector('.price').innerHTML;
    let proImg = product2.querySelector('.pro-img').src;
    let newProductElement = createCart(title, price, proImg);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;
    cart.append(element);
   

}
// order notification

function order() {
    let orderCount = 0;
    orderCount++;
    let notification = document.getElementById("order");
    notification.textContent = orderCount++;
}

function createCart(title, price, proImg) {
    return ` <div class="cart-box">
                <img src="${proImg}" alt="shirt" class="cart-img">
                <div class="detail-box">
                    <div class="cart-title">${title}</div>
                    <div class="price-box">
                        <div class="cart-price">${price}</div>
                    </div>
                </div>
                <i id="cart-remove" class="fa-solid fa-xmark"></i>
            </div>`
}


// wishlist 
function wish() {
    let overlay = document.getElementById("overlay");
    let wishlist = document.getElementById("wishlist");
    overlay.style.display = "block";
    wishlist.style.display = "block";
}

let back = document.getElementById("back");
back.addEventListener("click", () => {
    backway();
});

function backway() {
    let overlay = document.getElementById("overlay");
    let wishlist = document.getElementById("wishlist");
    overlay.style.display = "none";
    wishlist.style.display = "none";
}

// menu
let bar = document.getElementById("bar");
let menu = document.getElementById("menulist");
bar.addEventListener("click", () => {
    menu.style.display = "block";

});
let menuCancel = document.getElementById("menu-cancel");
menuCancel.addEventListener("click", () => {
    menu.style.display = "none";
});