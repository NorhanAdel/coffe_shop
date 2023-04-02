let navebar=document.querySelector('.navbar');
let menue=document.querySelector('#menue-btn');
menue.onclick=()=>{
    navebar.classList.toggle('active');
    cart_item.classList.remove('active');
    search_form.classList.remove('active');
}

let cart_item=document.querySelector('.cart-item-container');
let cart=document.querySelector('#cart');
cart.onclick=()=>{
    cart_item.classList.toggle('active');
    search_form.classList.remove('active');
    navebar.classList.remove('active');
}
let search_form=document.querySelector('.search');
let search=document.querySelector('#search-btn');
search.onclick=()=>{
    search_form.classList.toggle('active');
    navebar.classList.remove('active');
    cart_item.classList.remove('active');
}
