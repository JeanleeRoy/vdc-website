const swiper = new Swiper('.project-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,
    spaceBetween: 35,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        800: {
            slidesPerView: 3,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '#next-project',
        prevEl: '#prev-project',
    },

});
