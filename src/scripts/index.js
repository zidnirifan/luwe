import 'regenerator-runtime'; /* for async await transpile */
import '../scss/main.scss';
import '../component/navbar';
import '../component/hero';
import '../component/listRestaurant';
import data from '../DATA.json';

const navBar = document.createElement('nav-bar');
const hero = document.createElement('hero-element');

document.querySelector('header').appendChild(navBar);
document.querySelector('.hero').appendChild(hero);

// eslint-disable-next-line no-shadow
const createListRestaurant = ({ title, data, className }) => {
  const listRestaurant = document.createElement('list-restaurant');
  listRestaurant.className = className;

  listRestaurant.restaurants = data;
  document.querySelector(
    'main',
  ).innerHTML += `<h2 class="category">${title}</h2>`;
  document.querySelector('main').appendChild(listRestaurant);
};

createListRestaurant({
  title: 'Populer',
  data: data.popular,
  className: 'popular',
});
createListRestaurant({
  title: 'Semua Restoran',
  data: data.restaurants,
  className: 'all-restaurant',
});

const openSidebar = () => {
  document.querySelectorAll('.sidenav, .sidenav-overlay').forEach((e) => {
    e.classList.add('active');
  });
};

const closeSidebar = () => {
  document.querySelectorAll('.active').forEach((e) => {
    e.classList.remove('active');
  });
};

navBar.openSidebar = openSidebar;
navBar.closeSidebar = closeSidebar;
