'use strict'

import Swiper from 'swiper';
import {Navigation, Autoplay} from 'swiper/modules';
Swiper.use([Navigation, Autoplay])

new Swiper('.slider', {
  spaceBetween: 20,
  loop: true,
  speed: 800,
  watchOverflow: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,

    },
    767: {
      slidesPerView: 3,

    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});


let menu = document.querySelector('.click-burger');
let dropMenu = document.querySelector('.header-m__menu');
let body = document.querySelector('body');
if (menu) {
	menu.addEventListener('click', function() {
		menu.classList.toggle('open')
    dropMenu.classList.toggle('open')
    body.classList.toggle('open-menu')

    
	});
}

let clickMobileMenu = document.querySelectorAll('.click-mobilemenu') 
if (clickMobileMenu) {
  clickMobileMenu.forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      element.classList.toggle('open')
    }) 
  })
}

