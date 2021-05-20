import '../components/hero-component';
import '../components/list-restaurants';
import ApiServices from '../services/api';

const home = async () => {
  const restaurants = await ApiServices.listRestaurants();

  const listRestaurants = document.createElement('list-restaurants');
  listRestaurants.data = restaurants.restaurants;

  return /* html */ `
    <hero-component></hero-component>
    <h2 class="section-title">Daftar Restoran</h2>
    ${listRestaurants.outerHTML}
  `;
};

export default home;
