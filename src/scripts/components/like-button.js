import favoriteRestaurantIdb from '../services/idb';
import likeIcon from '../../public/images/like.svg';
import unLikeIcon from '../../public/images/liked.svg';
import showInfo from '../utils/showInfo';

class LikeButton extends HTMLElement {
  connectedCallback() {
    this.renderButton();

    if (LikeButton.data.id !== undefined) {
      this.addEventListener('click', async () => {
        if (this.classList.contains('liked')) {
          await this.deleteRestaurant();
        } else await this.likeRestaurant();
      });
    }
  }

  async renderButton() {
    if (await LikeButton.isRestaurantExist()) {
      this.renderUnlike();
    } else {
      this.renderLike();
    }
  }

  set data(data) {
    LikeButton.data = data;
    this.render();
  }

  renderLike() {
    this.firstElementChild.src = likeIcon;
    this.classList.remove('liked');
    this.setAttribute('aria-label', 'Tambahkan ke favorit');
    this.id = 'like-button';
  }

  renderUnlike() {
    this.firstElementChild.src = unLikeIcon;
    this.classList.add('liked');
    this.setAttribute('aria-label', 'Hapus dari favorit');
    this.id = 'unlike-button';
  }

  showLikeInfo(text, isSucess) {
    const likeInfo = this.querySelector('.like-info');
    showInfo(likeInfo, text, isSucess);
    setTimeout(() => likeInfo.classList.remove('show'), 1500);
  }

  async likeRestaurant() {
    try {
      // eslint-disable-next-line object-curly-newline
      const { id, city, description, name, pictureId, rating } = LikeButton.data;
      const data = {
        id,
        city,
        description,
        name,
        pictureId,
        rating,
      };
      await favoriteRestaurantIdb.putRestaurant(data);
      this.renderUnlike();
      this.showLikeInfo('Berhasil Ditambahkan ke Favorite', true);
    } catch (error) {
      this.showLikeInfo('Upss terjadi kesalahan', false);
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  async deleteRestaurant() {
    try {
      await favoriteRestaurantIdb.deleteRestaurant(LikeButton.data.id);
      this.renderLike();
      this.showLikeInfo('Berhasil Dihapus dari Favorite', true);
    } catch (error) {
      this.showLikeInfo('Upss terjadi kesalahan', false);
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  static async isRestaurantExist() {
    if (LikeButton.data.id === undefined) return false;

    const restaurant = await favoriteRestaurantIdb.getRestaurant(
      LikeButton.data.id,
    );
    return !!restaurant;
  }

  render() {
    this.classList = 'like-button vertical-center';
    this.id = 'like-button';

    this.innerHTML = /* html */ `
        <img src="${likeIcon}" alt="Like button" class="like-icon"/>
        <div class="info like-info"></div>
    `;
  }
}

customElements.define('like-button', LikeButton);
