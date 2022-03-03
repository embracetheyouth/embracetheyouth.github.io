// SWIPER START

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320: {
            slidesPerView: 2.5,
        },
        360: {
            slidesPerView: 2.5,
        },
        375: {
            slidesPerView: 2.5,
        },
        425: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 5,
        }
    },
    centeredSlides: true,
    spaceBetween: 10,
    initialSlide: 1,
    // width: 200,

});

// SWIPER END