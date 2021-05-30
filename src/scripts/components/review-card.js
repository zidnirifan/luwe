class Review extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <div class="review-card">
        <p class="date">${this._data.date}</p>
        <h4 class="name">${this._data.name}</h4>
        <q><i>${this._data.review}</i></q>
      </div>
    `;
  }
}

customElements.define('review-card', Review);
