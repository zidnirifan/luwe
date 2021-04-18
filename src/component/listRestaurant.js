import './restaurantCard';

class ListRestaurant extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
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

customElements.define('list-restaurant', ListRestaurant);
