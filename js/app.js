const overlay = document.querySelector('.overlay');
const popup = document.querySelectorAll('.popup');
const portholioItem = document.querySelectorAll('.portholio__item');
const popupClose = document.querySelectorAll('.popup__close');
const skills = document.querySelector('.about-me__skills');
const menuBurher = document.querySelector('.header__burher');


mixitup('.portholio__box');

//Плавный скрол
$(document).ready(function () {
   $("a.header__nav-url").click(function () {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      if (window.innerWidth <= 1000) {
         if (menuBurher.parentNode.style.transform != '' || menuBurher.parentNode.style.transform != 'translateX(-100%)') {
            menuBurher.parentNode.style = 'transform: translateX(-100%);'
         }
      }
      return false;
   });
});

// popup
overlay.addEventListener('click', e => {
   overlay.classList.remove('active-js');
   popup.forEach(el => {
      el.classList.remove('active-js');
   });
})

portholioItem.forEach(item => {
   item.addEventListener('click', popupEl => {
      overlay.classList.add('active-js');
      item.querySelector('.popup').classList.add('active-js');
   })
});

popupClose.forEach(item => {
   item.addEventListener('click', e => {
      e.stopPropagation();
      overlay.classList.remove('active-js');
      item.parentNode.classList.remove('active-js');
   })
});

//burgerMenu
menuBurher.addEventListener('click', e => {
   if (menuBurher.parentNode.style.transform == '' || menuBurher.parentNode.style.transform == 'translateX(-100%)') {
      menuBurher.parentNode.style = 'transform: translateX(0);'
   } else {
      menuBurher.parentNode.style = 'transform: translateX(-100%);'
   }
})