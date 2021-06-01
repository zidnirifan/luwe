import './components/nav-bar';

const navBar = document.createElement('nav-bar');
document.querySelector('header').appendChild(navBar);

const menuActive = () => {
  const menuItem = document.querySelectorAll('.menu-item');
  const menuItemActive = document.querySelectorAll('.menu-item.active');

  menuItemActive.forEach((e) => e.classList.remove('active'));

  menuItem.forEach((e) => {
    const href = e.getAttribute('href').substring(1);

    if (window.location.hash.substring(1) === href) e.classList.add('active');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  menuActive();
});

window.addEventListener('hashchange', () => {
  menuActive();
});
