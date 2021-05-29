import createStar from '../elements/star';
import CONFIG from '../global/config';

class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
            <div class="city">${this._restaurant.city}</div>    
            <div class="card-thumbnail" data-id="${this._restaurant.id}">
                <img 
                  src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" 
                  alt="${this._restaurant.name}"
                />
            </div>
            <div class="card-content">
              <h3 class="card-title" data-id="${this._restaurant.id}">
                ${this._restaurant.name}
              </h3>
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
