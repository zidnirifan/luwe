/* eslint-disable no-undef */
import '../src/scripts/components/like-button';
import favoriteRestaurantIdb from '../src/scripts/services/idb';

describe('Liking a restaurant', () => {
  const likeButton = document.createElement('like-button');
  const dataRestaurant = {
    id: 1,
    city: 'p',
    description: 'p',
    name: 'p',
    pictureId: 'p',
    rating: 'p',
  };

  beforeEach(() => {
    likeButton.data = dataRestaurant;
    document.body.innerHTML = likeButton.outerHTML;
  });

  it('should show the like button when the restaurant has not been liked before', () => {
    expect(document.querySelector('like-button')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', () => {
    expect(document.querySelector('like-button.liked')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    document.querySelector('like-button').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual(dataRestaurant);

    favoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await favoriteRestaurantIdb.putRestaurant(dataRestaurant);
    document.querySelector('like-button').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([dataRestaurant]);

    favoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    const newLikeButton = document.createElement('like-button');
    newLikeButton.data = {};
    document.body.innerHTML = newLikeButton.outerHTML;

    document.querySelector('like-button').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
