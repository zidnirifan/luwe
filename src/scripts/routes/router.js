const notFound = () => 'Not Found';

const router = (routeTable, pageNotFound = notFound) => {
  const urls = Object.getOwnPropertyNames(routeTable);

  const loadContent = async () => {
    const main = document.querySelector('main');
    const url = urls.filter((e) => window.location.hash === e)[0];

    if (window.location.hash === url) {
      main.innerHTML = '<h1>Loading</h1>';
      main.innerHTML = await routeTable[url]();
    } else {
      main.innerHTML = pageNotFound();
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
