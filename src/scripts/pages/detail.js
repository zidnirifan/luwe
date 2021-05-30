import '../components/detail-restaurant';
import '../components/review-card';
import apiService from '../services/api';
import closeIcon from '../../public/images/close.svg';

const detail = async () => {
  const idRestaurant = window.location.hash.substring(13);
  const data = await apiService.detailRestaurant(idRestaurant);

  const detailRestaurant = document.createElement('detail-restaurant');
  detailRestaurant.data = data.restaurant;

  const listReviews = data.restaurant.customerReviews.map((review) => {
    const reviewCard = document.createElement('review-card');
    reviewCard.data = review;
    return reviewCard.outerHTML;
  });

  const showAllReviews = () => {
    document
      .querySelectorAll('.all-reviews, .overlay')
      .forEach((e) => e.classList.add('show'));
  };

  const closeAllReviews = () => {
    document
      .querySelectorAll('.all-reviews, .overlay')
      .forEach((e) => e.classList.remove('show'));
  };

  return /* html */ `
    ${detailRestaurant.outerHTML}
    <div class="reviews">
      <h3 class="title">Review Pelanggan</h3>
        ${listReviews.slice(0, 3).join('')}
      <div class="button-container">
        <button onclick="(${showAllReviews})()" class="all-reviews-btn">
          Semua Review
        </button>
      </div>
      <div class="all-reviews">
        <div class="close-bar">
          <div class="close-btn" onclick="(${closeAllReviews})()" aria-label="close button">
            <img class="icon" src="${closeIcon}" alt="close"/>
          </div>
        </div>
        ${listReviews.join('')}
      </div>
      <div class="overlay"></div>
    </div>
  `;
};

export default detail;
