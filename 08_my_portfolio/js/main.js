const spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);
const controller = new ScrollMagic.Controller();
spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.5
  })
  .setClassToggle(spyEl, 'show')
  .addTo(controller);
});

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

const modalBtns = document.querySelectorAll('.project .btn-modal');
const modalEl = document.querySelector('#modal');
const closeBtns = document.querySelectorAll('.btn-close');
const imgEl = document.querySelector('#imageModal img');

modalBtns.forEach(function(modalBtn){
  modalBtn.addEventListener('click', function(){
    modalEl.style.display = 'flex';
  })
});
closeBtns.forEach(function(closeBtn){
  closeBtn.addEventListener('click', function(){
    modalEl.style.display = 'none';
  })
});
// closeBtn.addEventListener('click',function(){
//   modalEl.style.display = 'none';
// });

const modalImageBtns = document.querySelectorAll('.project .btn-modal-image');
const modalImageEl = document.querySelector('#imageModal');


modalImageBtns.forEach(function(modalImageBtn){
  modalImageBtn.addEventListener('click', function(){
    // modalImageBtn[0].imgEl.src = './images/portfolio(1).png';
    // modalImageBtn[1].imgEl.src = './images/portfolio(2).png';
    modalImageEl.style.display = 'flex';
  })
});
closeBtns.forEach(function(closeBtn){
  closeBtn.addEventListener('click', function(){
    modalImageEl.style.display = 'none';
  })
});

const yearEl = document.querySelector('.this-year');
yearEl.textContent = new Date().getFullYear();

// window.addEventListener('scroll',function(){
//   if(window.scrollY > 500){
//     toTopEl.style.opacity = '1';
//     toTopEl.style.transform = 'translateX(0px)';
//   }else{
//     toTopEl.style.opacity = '0';
//   }
// });