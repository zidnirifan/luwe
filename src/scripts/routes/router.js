const notFound = () => 'Not Found';

const router = (routeTable, pageNotFound = notFound) => {
  const urls = Object.getOwnPropertyNames(routeTable);

  const loadContent = () => {
    const main = document.querySelector('main');
    urls.forEach(async (url) => {
      if (window.location.hash === url) {
        main.innerHTML = await routeTable[url]();
      } else {
        main.innerHTML = pageNotFound();
      }
    });
  };

  window.addEventListener('hashchange', () => {
    loadContent();
  });
  document.addEventListener('DOMContentLoaded', () => {
    loadContent();
  });
};

export default router;
