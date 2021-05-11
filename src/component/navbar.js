import logo from '../public/images/logo.svg';

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set openSidebar(event) {
    this._openSidebar = event;
    this.render();
  }

  set closeSidebar(event) {
    this._closeSidebar = event;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
            <nav class="navbar">
                <a href="/" class="logo"><img src="${logo}" alt="logo luwe"/></a>
                <button class="menu-btn" aria-label="menu button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="menu-list">
                    <li><a class="menu-item" href="/">Home</a></li>
                    <li><a class="menu-item" href="#">Favorite</a></li>
                    <li><a class="menu-item" href="https://www.linkedin.com/in/zidnirifan/">About Us</a></li>
                </ul>
              </nav>
                <ul class="sidenav">
                    <li><a class="menu-item" href="/">Home</a></li>
                    <li><a class="menu-item" href="#">Favorite</a></li>
                    <li><a class="menu-item" href="https://www.linkedin.com/in/zidnirifan/">About Us</a></li>
                </ul>
            <div class="sidenav-overlay"></div>
        `;
    this.querySelector('.menu-btn').addEventListener(
      'click',
      this._openSidebar,
    );
    document
      .querySelector('.sidenav-overlay')
      .addEventListener('click', this._closeSidebar);
  }
}

customElements.define('nav-bar', Navbar);
