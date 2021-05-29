import createStar from '../elements/star';
import CONFIG from '../global/config';

class RestaurantCard extends HTMLElement {
  connectedCallback() {
    const detailLink = this.querySelectorAll('.detail-link');
    detailLink.forEach((e) => e.addEventListener('click', this._setId));
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  _setId() {
    localStorage.setItem('idRestaurant', this.dataset.id);
  }

  render() {
    this.innerHTML = /* html */ `
            <div class="city">${this._restaurant.city}</div>    
            <div class="card-thumbnail">
              <a href="#/detail" class="detail-link" 
                data-id="${this._restaurant.id}">
                <img 
                  src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" 
                  alt="${this._restaurant.name}"
                />
              </a>
            </div>
            <div class="card-content">
              <a href="#/detail" class="detail-link" 
                data-id="${this._restaurant.id}">
                <h3 class="card-title">${this._restaurant.name}</h3>
              </a>
              <div class="rating">
                ${createStar(this._restaurant.rating)} 
                <span> ${this._restaurant.rating}</span>
              </div>
              <p class="card-description">${this._restaurant.description}</p>
            </div>
        `;
  }
}

customElements.define('restaurant-card', RestaurantCard);
