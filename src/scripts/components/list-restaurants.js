import './restaurant-card';

class ListRestaurants extends HTMLElement {
  set data(data) {
    this._restaurants = data;
    this.render();
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('restaurant-card');

      restaurantElement.restaurant = restaurant;
      this.appendChild(restaurantElement);
    });
  }
}

customElements.define('list-restaurants', ListRestaurants);
