function swiperSlider() {
  const swiperSlider = document.querySelectorAll('[data-slider="slider"]');
  if (swiperSlider) {
    swiperSlider.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
      swiper = new Swiper(slider.querySelector('.swiper'), {
        slidesPerView: 2,
        initialSlide: 4,
        spaceBetween: 16,
        centeredSlides: true,
        freeMode: true,
        loop: true,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }
}
window.addEventListener('load', swiperSlider);

// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 2,
//   initialSlide: 4,
//   spaceBetween: 16,
//   centeredSlides: true,
//   freeMode: true,
//   // loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//     // when window width is >= 480px
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//   },
// });
