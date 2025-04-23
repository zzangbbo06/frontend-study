const swiper = new Swiper('.project .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay :{
    delay : 5000
  },
  // If we need pagination
  pagination: {
    el: '.project .swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});