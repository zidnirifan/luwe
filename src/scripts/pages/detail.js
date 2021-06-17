import '../components/detail-restaurant';
import '../components/review-card';
import '../components/form-review';
import '../components/like-button';
import '../components/reviews-section';
import apiService from '../services/api';

const detail = async () => {
  const idRestaurant = window.location.hash.substring(13);
  const data = await apiService.detailRestaurant(idRestaurant);

  const detailRestaurant = document.createElement('detail-restaurant');
  detailRestaurant.data = data.restaurant;

  const likeButton = document.createElement('like-button');
  likeButton.data = data.restaurant;

  const formReview = document.createElement('form-review');

  const reviewsSection = document.createElement('reviews-section');
  reviewsSection.data = data.restaurant.customerReviews;

  return /* html */ `
    ${detailRestaurant.outerHTML}
    ${reviewsSection.outerHTML}
    ${formReview.outerHTML}
    ${likeButton.outerHTML}
  `;
};

export default detail;
