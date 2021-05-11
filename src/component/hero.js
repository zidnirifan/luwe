class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
            <div class="hero">
                <div className="hero-inner">
                    <h1 class="hero-title">Temukan Restoran Terbaikmu</h1>
                    <p class="hero-tagline">Manjakan perut laparmu dengan hidangan lezat dari restoran yang berkualitas</p>        
                </div>
            </div>
        `;
  }
}

customElements.define('hero-element', Hero);
