import apiService from '../services/api';
import './review-card';

class FormReview extends HTMLElement {
  connectedCallback() {
    this.render();

    this.querySelector('.submit-btn').addEventListener(
      'click',
      FormReview.submitReview,
    );
  }

  static async submitReview() {
    const name = document.querySelector('#name-reviewer').value;
    const review = document.querySelector('#review-text').value;
    const id = window.location.hash.substring(13);
    const formInfo = document.querySelector('.submit-info');

    const showFormInfo = (text, isSucess) => {
      formInfo.innerText = text;
      const className = formInfo.classList;
      if (!className.contains('show')) className.add('show');
      if (className.contains('success')) className.remove('success');
      if (className.contains('error')) className.remove('error');
      className.add(isSucess ? 'success' : 'error');
    };

    if (name === '') showFormInfo('Mohon isi kolom nama', false);
    else if (review === '') showFormInfo('Mohon isi kolom review', false);
    else {
      const data = JSON.stringify({ id, name, review });
      const response = await apiService.addReview(data);
      if (!response.error) {
        showFormInfo('Review berhasil ditambahkan', true);

        document
          .querySelectorAll('#name-reviewer, #review-text')
          .forEach((e) => {
            e.value = '';
          });

        const lastIndex = response.customerReviews.length - 1;
        const lastReview = document.createElement('review-card');
        lastReview.data = response.customerReviews[lastIndex];
        document.querySelector('.list-reviews').appendChild(lastReview);
      } else showFormInfo('Ups terjadi kesalahan', false);
    }
  }

  render() {
    this.innerHTML = /* html */ `
      <form class="add-review">
        <h3 class="title">Tambahkan Review</h3>
        <label for="name-reviewer">Nama</label><br />
        <input type="text" id="name-reviewer" placeholder="Nama"><br />
        <label for="review-text">Review</label><br />
        <textarea id="review-text" rows="5" placeholder="Reviewmu"></textarea><br />
        <div class="submit-info"></div>
        <button class="submit-btn">Submit</button>
      </form>
    `;
  }
}

customElements.define('form-review', FormReview);
