import '../components/list-restaurants';
import favoriteRestaurantIdb from '../services/idb';

const favorite = async () => {
  const data = await favoriteRestaurantIdb.getAllRestaurants();

  const listRestaurants = document.createElement('list-restaurants');
  listRestaurants.data = data;

  let sectionTitle = 'Restoran Favorit';
  let height = null;
  let isEmpty = false;

  if (listRestaurants.innerHTML === '') {
    sectionTitle = 'Belum ada restoran favorit';
    isEmpty = true;
    height = window.innerHeight - 130;
  }

  return /* html */ `
  <div class="favorite-page" style="height: ${height}px;">
    <h2 class="section-title ${isEmpty ? 'empty-favorite' : 'favorites'}">
      ${sectionTitle}
    </h2>
      ${listRestaurants.outerHTML}
  </div>
  `;
};

export default favorite;
