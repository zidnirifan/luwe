import showInfo from '../utils/showInfo';
import apiService from '../services/api';
import './review-card';

class FormReview extends HTMLElement {
  connectedCallback() {
    this.render();

    this.querySelector('.submit-btn').addEventListener(
      'click',
      () => this.submitReview(),
    );
  }

  async submitReview() {
    const name = this.querySelector('#name-reviewer').value;
    const review = this.querySelector('#review-text').value;
    const id = window.location.hash.substring(13);

    if (name === '') this.showFormInfo('Mohon isi kolom nama', false);
    else if (review === '') this.showFormInfo('Mohon isi kolom review', false);
    else {
      const data = JSON.stringify({ id, name, review });
      const response = await apiService.addReview(data);
      if (!response.error) {
        this.showFormInfo('Review berhasil ditambahkan', true);

        document
          .querySelectorAll('#name-reviewer, #review-text')
          .forEach((e) => {
            e.value = '';
          });

        const lastIndex = response.customerReviews.length - 1;
        const lastReview = document.createElement('review-card');
        lastReview.data = response.customerReviews[lastIndex];
        document.querySelector('.list-reviews').appendChild(lastReview);
      } else this.showFormInfo('Ups terjadi kesalahan', false);
    }
  }

  showFormInfo(text, isSucess) {
    showInfo(this.querySelector('.submit-info'), text, isSucess);
  }

  render() {
    this.innerHTML = /* html */ `
      <form class="add-review">
        <h3 class="title">Tambahkan Review</h3>
        <label for="name-reviewer">Nama</label><br />
        <input type="text" id="name-reviewer" placeholder="Nama"><br />
        <label for="review-text">Review</label><br />
        <textarea id="review-text" rows="5" placeholder="Reviewmu"></textarea><br />
        <div class="submit-info info"></div>
        <button type="button" class="submit-btn">Submit</button>
      </form>
    `;
  }
}

customElements.define('form-review', FormReview);
