// search div
let search = document.getElementById('search-icon');
let searchDiv = document.getElementById('search-div');
search.addEventListener('click',()=>{
    searchDiv.style.display='block';
});
// search close 
let searchCancel = document.getElementById('close');
searchCancel.addEventListener("click",()=>{
    searchDiv.style.display='none';
});
// shop notification
let shopNotifie = document.getElementById('shop-notifie');
let cart = document.getElementById('cart');
shopNotifie.addEventListener("click",()=>{
    cart.style.display="block";
});
// shop notification cancel
let cancel = document.getElementById('cancel');
cancel.addEventListener("click",()=>{
    cart.style.display="none";
});

// loading fiunction
function loading(){
    document.getElementById('loading').style.display = 'flex';
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
      
    }, 1500);
    }

    // wishlist 
function wish(){
    let overlay =document.getElementById("overlay");
    let wishlist = document.getElementById("wishlist");
    overlay.style.display="block";
    wishlist.style.display="block";
}

let back = document.getElementById("back");
back.addEventListener("click",()=>{
    backway();
});

function backway(){
    let overlay =document.getElementById("overlay");
    let wishlist = document.getElementById("wishlist");
    overlay.style.display="none";
    wishlist.style.display="none";
}
// menu
let bar = document.getElementById("bar");
let menu = document.getElementById("menulist");
bar.addEventListener("click",()=>{
    menu.style.display="block";
    
});
let menuCancel = document.getElementById("menu-cancel");
menuCancel.addEventListener("click",()=>{
    menu.style.display="none";
});