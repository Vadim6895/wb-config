// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

// init Swiper:
var mySwiper = new Swiper('#swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var mySwiperReviews = new Swiper('#swiper-2', {
  // Optional parameters
  direction: 'horizontal',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 1,
    },
    768: {
      slidesPerColumn: 2,
      slidesPerColumnFill: 2,
      slidesPerView: 1,
    },
    1280: {
      slidesPerColumn: 1,
      slidesPerColumnFill: 1,
      slidesPerView: 2,
    },
  },
});
