import CONFIG from '../global/config';
import createStar from '../elements/star';
import locationIcon from '../../public/images/location.svg';
import menuIcon from '../../public/images/menu.svg';
import foodIcon from '../../public/images/food.svg';
import drinkIcon from '../../public/images/drink.svg';

class DetailRestaurant extends HTMLElement {
  connectedCallback() {
    const readMoreBtn = this.querySelector('.read-more');
    readMoreBtn.addEventListener('click', DetailRestaurant.readMore);
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  static readMore() {
    const readMoreBtn = document.querySelector('.read-more');
    const description = document.querySelector('.description');
    const isHide = description.classList.contains('hide');

    description.classList.toggle('hide');
    readMoreBtn.innerText = isHide
      ? 'Lihat lebih sedikit'
      : 'Lihat Selengkapnya';
  }

  render() {
    const categories = this._data.categories.map(
      (category) => `<span class="category">${category.name}</span>`,
    );
    const foods = this._data.menus.foods.map((food) => `<li>${food.name}</li>`);
    const drinks = this._data.menus.drinks.map(
      (drink) => `<li>${drink.name}</li>`,
    );

    this.innerHTML = /* html */ `
      <div class="detail">
        <div class="detail-img full-width">
          <img src="${CONFIG.BASE_IMAGE_URL + this._data.pictureId}" 
            alt="${this._data.name}"/>
        </div>
        <h3 class="title">${this._data.name}</h3>
        <div class="rating">
          ${createStar(this._data.rating)} 
          <span> ${this._data.rating}</span>
        </div>
        <div class="categories">
          ${categories.join(' ')}
        </div>
        <div class="address vertical-center">
          <img src="${locationIcon}" alt="location" class="icon"/>
          <span>${this._data.address}, ${this._data.city}</span>
        </div>
        <h4>Deskripsi: </h4>
        <p class="description hide">${this._data.description}</p>
        <button class="read-more">Lihat selengkapnya</button>
        <div class="menu vertical-center">
          <img src="${menuIcon}" alt="menu" class="icon"/>
          <h4>Menu</h4>
        </div>
        <div class="foods">
          <div class="vertical-center">
            <img src="${foodIcon}" alt="foods" class="icon"/>
            <h5>Makanan: </h5>
          </div>
          <ul>
            ${foods.join('')}
          </ul>
        </div>
        <div class="drinks">
          <div class="vertical-center">
            <img src="${drinkIcon}" alt="drinks" class="icon"/>
            <h5>Minuman: </h5>
          </div>
          <ul>
            ${drinks.join('')}
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
