import '../components/list-restaurants';
import favoriteRestaurantIdb from '../services/idb';

const favorite = async () => {
  const data = await favoriteRestaurantIdb.getAllRestaurants();

  const listRestaurants = document.createElement('list-restaurants');
  listRestaurants.data = data;

  let sectionTitle = 'Restoran Favorit';

  if (listRestaurants.innerHTML === '') {
    sectionTitle = 'Belum ada restoran favorit';
  }

  return /* html */ `
  <h2 class="section-title">${sectionTitle}</h2>
    ${listRestaurants.outerHTML}
  `;
};

export default favorite;
