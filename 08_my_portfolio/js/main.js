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
const contactModalEl = document.querySelector('#contactModal')

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
// const contactEl = document.querySelector('#header nav li:nth-child(4)');


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

const aEl = document.querySelector('#header nav ul li .contact-btn');
  aEl.addEventListener('click',function(){
    contactModalEl.style.display = 'flex'
  });
closeBtns.forEach(function(closeBtn){
  closeBtn.addEventListener('click', function(){
    contactModalEl.style.display = 'none';
  });
});

const yearEl = document.querySelector('.this-year');
yearEl.textContent = new Date().getFullYear();

const totopEl = document.querySelector('#to-top');
const spanEls = document.querySelectorAll('.visual .inner .animate-move')
window.addEventListener('scroll', function(){
  if(window.scrollY > 500) {
    totopEl.style.opacity = '1';
    totopEl.style.transform = 'translateX(0px)';
    spanEls.forEach(function(spanEl){
      spanEl.classList.remove('animate-move')
    })
  }else{
    totopEl.style.opacity = '0';
    spanEls.forEach(function(spanEl){
        spanEl.classList.add('animate-move')
    })
  }
});

const btnHamburger = document.querySelector('.btn-hamburger');
const navEl = document.querySelector('header nav');

btnHamburger.addEventListener('click', function(){
  // if(navEl.classList.contains('active')){
  //   navEl.classList.remove('active');
  // }else{
  //   navEl.classList.add('active')
  // }
  navEl.classList.toggle('active');
})

const aEls = document.querySelectorAll('header nav ul li a');
aEls.forEach(function(aEl){
  aEl.addEventListener('click', function(){
    navEl.classList.remove('active');
  })
})