import logo from '../../public/images/logo.svg';

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();

    const toggleBtn = this.querySelectorAll(
      '.sidenav .menu-item, .menu-btn, .sidenav-overlay',
    );
    toggleBtn.forEach((btn) => {
      btn.addEventListener('click', Navbar.toggleSidebar);
    });
  }

  static toggleSidebar() {
    document.querySelectorAll('.sidenav, .sidenav-overlay').forEach((e) => {
      e.classList.toggle('active');
    });
  }

  render() {
    this.innerHTML = /* html */ `
      <nav class="navbar">
          <div class="logo">
            <a href="#"><img src="${logo}" alt="logo luwe"/></a>
          </div>
          <button class="menu-btn" aria-label="Tombol menu">
              <span></span>
              <span></span>
              <span></span>
          </button>
          <ul class="menu-list">
              <li><a class="menu-item" href="#">Home</a></li>
              <li><a class="menu-item" href="#/favorite">Favorite</a></li>
              <li><a class="menu-item" href="#/about">About Us</a></li>
          </ul>
        </nav>
          <ul class="sidenav">
              <li><a class="menu-item" href="#">Home</a></li>
              <li><a class="menu-item" href="#/favorite">Favorite</a></li>
              <li><a class="menu-item" href="#/about">About Us</a></li>
          </ul>
      <div class="sidenav-overlay"></div>
    `;
  }
}

customElements.define('nav-bar', Navbar);
