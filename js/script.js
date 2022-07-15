
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
    770: {
      slidesPerView: 2,
    },

    990: {
      slidesPerView: 3,
    },
  },
  loop: false,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }


});

