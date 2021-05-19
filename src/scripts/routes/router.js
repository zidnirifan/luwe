const router = (path, page) => {
  const loadContent = () => {
    if (window.location.hash === `#${path}`) {
      page();
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
