const router = (path, page) => {
  const loadContent = () => {
    if (window.location.hash === path) {
      const main = document.querySelector('main');
      main.innerHTML = page();
    }
  };

  window.addEventListener('hashchange', () => {
    loadContent();
  });
  document.addEventListener('DOMContentLoaded', () => {
    loadContent();
  });
};

export default router;
