/* eslint-disable class-methods-use-this */
import './review-card';
import closeIcon from '../../public/images/close.svg';

class ReviewsSection extends HTMLElement {
  connectedCallback() {
    this.querySelector('.all-reviews-btn').addEventListener('click', this.showAllReviews);
    this.querySelector('.close-btn').addEventListener('click', this.closeAllReviews);
    this.querySelector('.overlay').addEventListener('click', this.closeAllReviews);
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  showAllReviews() {
    document
      .querySelectorAll('.all-reviews, .overlay')
      .forEach((e) => e.classList.add('show'));
  }

  closeAllReviews() {
    document
      .querySelectorAll('.all-reviews, .overlay')
      .forEach((e) => e.classList.remove('show'));
  }

  render() {
    const listReviews = this._data.map((review) => {
      const reviewCard = document.createElement('review-card');
      reviewCard.data = review;
      return reviewCard.outerHTML;
    });

    this.innerHTML = /* html */ `
      <div class="reviews">
        <h3 class="title">Review Pelanggan</h3>
        <div class="list-reviews">
          ${listReviews.slice(0, 4).join('')}
        </div>
        <div class="button-container">
          <button class="all-reviews-btn">
            Semua Review
          </button>
        </div>
        <div class="all-reviews">
          <div class="close-bar">
            <div class="close-btn" aria-label="Tutup semua review">
              <img class="icon" src="${closeIcon}" alt="close"/>
            </div>
          </div>
          <div class="list-reviews">
          ${listReviews.join('')}
          </div>
        </div>
        <div class="overlay" aria-label="Tutup semua review"></div>
      </div>
    `;
  }
}

customElements.define('reviews-section', ReviewsSection);
