const router = (path, page) => {
  const loadContent = async () => {
    if (window.location.hash === path) {
      const main = document.querySelector('main');
      main.innerHTML = await page();
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
