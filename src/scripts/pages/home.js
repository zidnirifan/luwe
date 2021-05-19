import '../component/hero';
import '../component/listRestaurant';
import data from '../../DATA.json';

const home = () => {
  const main = document.querySelector('#main');

  const hero = document.createElement('hero-element');
  main.innerHTML = '';
  main.appendChild(hero);

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
};

export default home;
