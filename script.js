// script.js
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

const burger = document.querySelector('.burger');
const navLinksMobile = document.querySelector('.nav-links-mobile');

burger.addEventListener('click', () => {
    navLinksMobile.classList.toggle('active');
});
