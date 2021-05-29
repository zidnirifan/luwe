import '../components/detail-restaurant';
import apiService from '../services/api';

const detail = async () => {
  const data = await apiService.detailRestaurant('rqdv5juczeskfw1e867');

  const detailRestaurant = document.createElement('detail-restaurant');
  detailRestaurant.data = data.restaurant;

  return /* html */ `
    ${detailRestaurant.outerHTML}
  `;
};

export default detail;
