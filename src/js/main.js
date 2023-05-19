
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
Swiper.use([Navigation, Pagination]);

// init Swiper:
// const swiper = new Swiper('.swiper', {
//     // configure Swiper to use modules
//     modules: [Navigation, Pagination],});




const swiper = new Swiper('.swiper', {
      loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    // курсор перетаскивания
    grabCursor: true,

});