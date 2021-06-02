import favoriteRestaurantIdb from '../services/idb';
import likeIcon from '../../public/images/like.svg';
import likedIcon from '../../public/images/liked.svg';

class LikeButton extends HTMLElement {
  connectedCallback() {
    this.renderButton();

    this.addEventListener('click', async () => {
      if (this.classList.contains('liked')) {
        await this.deleteRestaurant();
      } else await this.likeRestaurant();
    });
  }

  async renderButton() {
    if (await LikeButton.isRestaurantExist()) {
      this.renderLiked();
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
  }

  renderLiked() {
    this.firstElementChild.src = likedIcon;
    this.classList.add('liked');
  }

  showLikeInfo(text, isSucess) {
    const likeInfo = this.querySelector('.like-info');

    likeInfo.innerText = text;
    const className = likeInfo.classList;
    if (!className.contains('show')) className.add('show');
    if (className.contains('success')) className.remove('success');
    if (className.contains('error')) className.remove('error');
    className.add(isSucess ? 'success' : 'error');
    setTimeout(() => className.remove('show'), 1500);
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
      this.renderLiked();
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
    const restaurant = await favoriteRestaurantIdb.getRestaurant(
      LikeButton.data.id,
    );
    return !!restaurant;
  }

  render() {
    this.classList = 'like-button vertical-center';
    this.setAttribute('aria-label', 'Like Button');

    this.innerHTML = /* html */ `
        <img src="${likeIcon}" alt="Like button" class="like-icon"/>
        <div class="info like-info success"></div>
    `;
  }
}

customElements.define('like-button', LikeButton);
