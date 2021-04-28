class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
            <div class="rating">Rating: ${this._restaurant.rating}</div>    
            <div class="card-thumbnail">
                <img src="${this._restaurant.pictureId}" alt="${this._restaurant.name}"/>
            </div>
            <div class="card-content">
              <h3 class="card-title">${this._restaurant.name}</h3>
              <p class="city">Kota ${this._restaurant.city}</p>
              <p class="card-description">${this._restaurant.description}</p>
            </div>
        `;
  }
}

customElements.define('restaurant-card', RestaurantCard);
