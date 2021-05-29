import '../components/detail-restaurant';
import apiService from '../services/api';

const detail = async () => {
  const idRestaurant = window.location.hash.substring(13);
  const data = await apiService.detailRestaurant(idRestaurant);

  const detailRestaurant = document.createElement('detail-restaurant');
  detailRestaurant.data = data.restaurant;

  return /* html */ `
    ${detailRestaurant.outerHTML}
  `;
};

export default detail;
