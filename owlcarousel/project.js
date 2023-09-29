// source -> https://codepen.io/shamim539/pen/GZPZBp

jQuery(document).ready(function ($) {
    "use strict";
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 4500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});

// $(document).ready(function(){
//     $('#customers-testimonials').hScroll();
// });