class RestaurantCard extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  // }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
            <div class="city">Kota ${this._restaurant.city}</div>    
            <div class="card-thumbnail">
                <img src="${this._restaurant.pictureId}" alt=""/>
            </div>
            <h3 class="card-title">${this._restaurant.name}</h3>
            <p class="card-description">${this._restaurant.description}</p>
        `;
  }
}

customElements.define('restaurant-card', RestaurantCard);
