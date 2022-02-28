
//start click search
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').addEventListener('click',  () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    
})
// end click search

// start click cart
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').addEventListener('click', () => {
    shoppingCart.classList.toggle('active');

    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');


})
// end click cart
// start click account
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').addEventListener('click', () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');


})
// end click cart
// start click menu
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').addEventListener('click', () => {
    console.log(1)
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
   

})
// end click menu

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

// swiper product
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

// swiper review
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});