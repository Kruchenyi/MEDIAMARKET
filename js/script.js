"use strict"

let isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
   }
};
if (isMobile.any()) {
   document.body.classList.add('touch');
} else {
   document.body.classList.add('pc');
}

// MENU ARROW==============================================
const arrow = document.querySelector('.navbar__arrow');
const phone = document.querySelector('.navbar__phone');
arrow.addEventListener('click', function () {
   arrow.classList.toggle('navbar__arractive');
   phone.classList.toggle('navbar__phactive');
});



// BURGER===============================
const burger = document.querySelector('.navbar__burger');
const navbarBody = document.querySelector('.navbar__body');
burger.addEventListener('click', function () {
   burger.classList.toggle('navbar__buractive');
   navbarBody.classList.toggle('navbar__bodactive');
   phone.classList.remove('navbar__phactive');
   arrow.classList.remove('navbar__arractive');
});


// LEFT MENU=================
const leftMenu = document.querySelector('.menu');
const shapeLeftMenu = document.querySelector('.menu__shape');
const body = document.querySelector('body');

function showMenuTouch() {
   if (body.classList.contains('touch')) {
      leftMenu.addEventListener('click', function () {
         leftMenu.classList.toggle('menu__active');
         shapeLeftMenu.classList.toggle('shape__active');
      });
      shapeLeftMenu.addEventListener('click', function () {
         leftMenu.classList.toggle('menu__active');
         shapeLeftMenu.classList.toggle('shape__active');
      });
   }
}

function showMenuShape() {
   if (body.classList.contains('touch')) {
      shapeLeftMenu.addEventListener('click', function () {
         leftMenu.classList.toggle('menu__active');
         shapeLeftMenu.classList.toggle('shape__active');
      });
   }
}
showMenuTouch();
showMenuShape();



function showMenuPc() {
   if (body.classList.contains('pc')) {
      leftMenu.addEventListener('mouseover', function () {
         leftMenu.classList.add('menu__active');
         shapeLeftMenu.classList.add('shape__active');
      });
      leftMenu.addEventListener('mouseout', function () {
         leftMenu.classList.remove('menu__active');
         shapeLeftMenu.classList.remove('shape__active');
      });
   }
}
showMenuPc();



// SWIPER==========================
new Swiper('.slider', {

   direction: 'horizontal',
   loop: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      650: {
         slidesPerView: 2,
      },
      1100: {
         slidesPerView: 3,
      }
   }
});


