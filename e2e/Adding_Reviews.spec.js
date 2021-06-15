/* eslint-disable no-undef */

Feature('Adding Reviews');

Before(({ I }) => {
  I.amOnPage('/#/restaurant/s1knt6za9kkfw1e867');
});

Scenario('Showing form add review', ({ I }) => {
  I.seeElement('form-review');
});

Scenario('Adding a review', ({ I }) => {
  I.seeElement('form-review');

  const name = 'Jhon Doe';
  const review = 'Gooood';
  I.fillField('#name-reviewer', name);
  I.fillField('#review-text', review);

  I.click('.submit-btn');
  I.see('Review berhasil ditambahkan', '.submit-info.success');
});

Scenario('Adding a review without name and review text', ({ I }) => {
  I.seeElement('form-review');

  I.click('.submit-btn');
  I.see('Mohon isi kolom nama', '.submit-info.error');
});

Scenario('Adding a review without name', ({ I }) => {
  I.seeElement('form-review');

  const review = 'Gooood';
  I.fillField('#review-text', review);

  I.click('.submit-btn');
  I.see('Mohon isi kolom nama', '.submit-info.error');
});

Scenario('Adding a review without review text', ({ I }) => {
  I.seeElement('form-review');

  const name = 'Jhon Doe';
  I.fillField('#name-reviewer', name);

  I.click('.submit-btn');
  I.see('Mohon isi kolom review', '.submit-info.error');
});
