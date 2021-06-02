import '../components/list-restaurants';
import favoriteRestaurantIdb from '../services/idb';

const favorite = async () => {
  const data = await favoriteRestaurantIdb.getAllRestaurants();

  const listRestaurants = document.createElement('list-restaurants');
  listRestaurants.data = data;

  let sectionTitle = 'Restoran Favorit';
  let height = null;

  if (listRestaurants.innerHTML === '') {
    sectionTitle = 'Belum ada restoran favorit';
    height = window.innerHeight - 130;
  }

  return /* html */ `
  <div class="favorite-page" style="height: ${height}px;">
    <h2 class="section-title">${sectionTitle}</h2>
      ${listRestaurants.outerHTML}
  </div>
  `;
};

export default favorite;
