/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty favorited restaurant', ({ I }) => {
  I.see('Belum ada restoran favorit', '.empty-favorite');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Belum ada restoran favorit', '.empty-favorite');

  I.amOnPage('/');

  I.seeElement('list-restaurants');

  const firstRestaurant = locate('restaurant-card .card-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');
  I.see('Berhasil Ditambahkan ke Favorit', '.like-info.success');

  I.amOnPage('/#/favorite');
  I.seeElement('list-restaurants');
  const likedRestaurantTitle = await I.grabTextFrom('restaurant-card .card-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  const favoritedRestaurant = locate('restaurant-card .card-title').first();
  I.click(favoritedRestaurant);

  I.seeElement('#unlike-button');
  I.click('#unlike-button');
  I.see('Berhasil Dihapus dari Favorit', '.like-info.success');

  I.amOnPage('/#/favorite');
  I.see('Belum ada restoran favorit', '.empty-favorite');
});
