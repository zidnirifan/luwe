import 'regenerator-runtime'; /* for async await transpile */
import './../scss/main.scss';
import './../component/navbar';
import './../component/hero';
import './../component/listRestaurant';
import data from './../DATA.json';

const navBar = document.createElement('nav-bar');
const hero = document.createElement('hero-element');

document.querySelector('header').appendChild(navBar);
document.querySelector('.hero').appendChild(hero);

const popular = () => {
  const listRestaurant = document.createElement('list-restaurant');
  listRestaurant.className = 'popular';

  const title = `<h2 class="category">Populer</h2>`;

  listRestaurant.restaurants = data.popular;
  document.querySelector('main').innerHTML += title;
  document.querySelector('main').appendChild(listRestaurant);
};

const allRestaurant = () => {
  const listRestaurant = document.createElement('list-restaurant');
  listRestaurant.className = 'all-restaurant';

  const title = `<h2 class="category">Semua Restoran</h2>`;

  listRestaurant.restaurants = data.restaurants;
  document.querySelector('main').innerHTML += title;
  document.querySelector('main').appendChild(listRestaurant);
};

popular();
allRestaurant();

const sidebarActive = () => {
  document.querySelectorAll('.sidenav, .sidenav-overlay').forEach((e) => {
    e.classList.add('active');
  });
};

navBar.clickEvent = sidebarActive;

