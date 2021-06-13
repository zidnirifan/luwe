/* eslint-disable no-undef */
import favoriteRestaurantIdb from '../src/scripts/services/idb';

const dataRestaurant = {
  id: 1,
  city: 'p',
  description: 'p',
  name: 'p',
  pictureId: 'p',
  rating: 'p',
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    await favoriteRestaurantIdb.putRestaurant(dataRestaurant);
    const likeButton = document.createElement('like-button');
    likeButton.data = dataRestaurant;
    document.body.innerHTML = likeButton.outerHTML;
  });

  afterEach(async () => {
    await favoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the movie has been liked', () => {
    setTimeout(() => {
      expect(document.querySelector('[aria-label="Hapus dari favorit"]')).toBeTruthy();
    }, 50);
  });

  it('should not display like widget when the movie has been liked', () => {
    setTimeout(() => {
      expect(document.querySelector('[aria-label="Tambahkan ke favorit"]')).toBeFalsy();
    }, 50);
  });

  it('should be able to remove liked movie from the list', () => {
    setTimeout(async () => {
      document.querySelector('like-button').dispatchEvent(new Event('click'));

      expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    }, 50);
  });

  it('should not throw error if the unliked movie is not in the list', async () => {
    setTimeout(async () => {
      await favoriteRestaurantIdb.deleteRestaurant(1);

      document.querySelector('like-button').dispatchEvent(new Event('click'));

      expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
  });
});
