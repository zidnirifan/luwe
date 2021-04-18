import 'regenerator-runtime'; /* for async await transpile */
import './../scss/main.scss';
import './../component/navbar';
import './../component/hero';
import './../component/listRestaurant';
import restaurants from './../DATA.json';

console.log(restaurants.restaurants);

const navBar = document.createElement('nav-bar');
const hero = document.createElement('hero-element');
const listRestaurant = document.createElement('list-restaurant');

document.querySelector('header').appendChild(navBar);
document.querySelector('.hero').appendChild(hero);

listRestaurant.restaurants = restaurants.restaurants;
document.querySelector('main').appendChild(listRestaurant);

const sidebarActive = () => {
  document.querySelectorAll('.sidenav, .sidenav-overlay').forEach((e) => {
    e.classList.add('active');
  });
};

navBar.clickEvent = sidebarActive;

