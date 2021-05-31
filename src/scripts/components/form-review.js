class FormReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <form class="add-review">
        <h3 class="title">Tulis Review</h3>
        <label for="name-reviewer">Nama</label><br />
        <input type="text" id="name-reviewer" placeholder="Nama"><br />
        <label for="review-text">Review</label><br />
        <textarea id="review-text" rows="5" placeholder="Reviewmu"></textarea><br />
        <button class="submit-btn">Submit</button>
      </form>
    `;
  }
}

customElements.define('form-review', FormReview);
