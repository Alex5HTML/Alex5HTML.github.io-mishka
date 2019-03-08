var navMain = document.querySelector('.page-header__menu-toggle');
var navToggle = document.querySelector('.page-header__toggle');
/*
var navWrapper = document.querySelector('.page-header__wrapper');
*/

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__menu-toggle--closed')) {
    navMain.classList.remove('page-header__menu-toggle--closed');
    navMain.classList.add('page-header__menu-toggle--opened');
  } else {
    navMain.classList.add('page-header__menu-toggle--closed');
    navMain.classList.remove('page-header__menu-toggle--opened');
  }
});
