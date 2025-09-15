'use strict';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__right');
const menuLinks = document.querySelectorAll('.header__nav a');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('header__right--active');
});

// Закриття меню при кліку на посилання
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      burger.classList.remove('active');
      menu.classList.remove('header__right--active');
    }
  });
});

const header = document.querySelector('.header');
const scrollTrigger = 50;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollTrigger) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
