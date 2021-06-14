/* eslint-disable no-undef */
import favoriteRestaurantIdb from '../src/scripts/services/idb';

const dataRestaurant = {
  id: 1,
  city: 'p',
  description: 'p',
  name: 'p',
  pictureId: '1',
  rating: 'p',
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    const likeButton = document.createElement('like-button');
    await favoriteRestaurantIdb.putRestaurant(dataRestaurant);
    likeButton.data = dataRestaurant;

    await favoriteRestaurantIdb.getRestaurant(1);

    document.body.innerHTML = likeButton.outerHTML;
  });

  afterEach(async () => {
    await favoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the movie has been liked', async () => {
    // console.log(await favoriteRestaurantIdb.getRestaurant(1));

    expect(document.getElementById('unlike-button')).toBeTruthy();
  });

  it('should not display like widget when the movie has been liked', async () => {
    expect(document.getElementById('like-button')).toBeFalsy();
  });

  it('should be able to remove liked movie from the list', async () => {
    document.querySelector('like-button').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked movie is not in the list', async () => {
    await favoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('like-button').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
