const swiper = new Swiper(".swiper", {
    loop: true, //autoplay
    effect: "cube",
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }, // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});