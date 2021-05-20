import '../components/hero-component';
import '../components/list-restaurants';
import data from '../../DATA.json';

const home = () => {
  const listRestaurants = document.createElement('list-restaurants');
  listRestaurants.data = data.restaurants;

  return /* html */ `
    <hero-component></hero-component>
    <h2 class="section-title">Semua Restoran</h2>
    ${listRestaurants.outerHTML}
  `;
};

export default home;
