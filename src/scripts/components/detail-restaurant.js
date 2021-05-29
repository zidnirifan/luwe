import CONFIG from '../global/config';
import createStar from '../elements/star';
import locationIcon from '../../public/images/location.svg';

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
    document.querySelector('.description').classList.remove('hide');
    readMoreBtn.removeEventListener('click', DetailRestaurant.readMore);
    readMoreBtn.addEventListener('click', DetailRestaurant.readLess);
    readMoreBtn.innerText = 'Lihat lebih sedikit';
  }

  static readLess() {
    const readMoreBtn = document.querySelector('.read-more');
    document.querySelector('.description').classList.add('hide');
    readMoreBtn.removeEventListener('click', DetailRestaurant.readLess);
    readMoreBtn.addEventListener('click', DetailRestaurant.readMore);
    readMoreBtn.innerText = 'Lihat Selengkapnya';
  }

  render() {
    const categories = this._data.categories.map(
      (category) => `<span class="category">${category.name}</span>`,
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
        <div class="address">
          <img src="${locationIcon}" alt="location" />
          <span>${this._data.address}, ${this._data.city}</span>
        </div>
        <h4>Deskripsi: </h4>
        <p class="description hide">${this._data.description}</p>
        <button class="read-more">Lihat selengkapnya</button>
      </div>
    `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
