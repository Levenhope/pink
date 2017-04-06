var navMain = document.querySelector('.main-nav');
var navMenu = document.querySelector('.main-nav__menu');
var navSwitch = document.querySelector('.main-nav__switch');

navSwitch.classList.remove('main-nav__switch--nojs');

function Closed() {
  navMain.classList.add('main-nav--closed');
  navSwitch.classList.remove('main-nav__switch--open');
  navSwitch.classList.add('main-nav__switch--closed');
  navMenu.classList.add('main-nav__menu--closed');
};

window.onload = Closed();

navSwitch.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navSwitch.classList.remove('main-nav__switch--closed');
    navSwitch.classList.add('main-nav__switch--open');
    navMenu.classList.remove('main-nav__menu--closed');
  } else {
    Closed();
  }
});
