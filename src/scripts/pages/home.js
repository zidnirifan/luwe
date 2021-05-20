import '../component/hero';
import '../component/listRestaurant';
import data from '../../DATA.json';

const home = () => {
  const listRestaurant = document.createElement('list-restaurant');
  listRestaurant.restaurants = data.restaurants;

  return /* html */ `
    <hero-element></hero-element>
    <h2 class="section-title">Semua Restoran</h2>
    ${listRestaurant.outerHTML}
  `;
};

export default home;
