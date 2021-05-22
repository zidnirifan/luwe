import loading from '../elements/loading';

const router = (routeTable, pageNotFound) => {
  const urls = Object.getOwnPropertyNames(routeTable);

  const loadContent = async () => {
    const main = document.querySelector('main');
    const url = urls.filter((e) => window.location.hash === e)[0];

    if (window.location.hash === url) {
      main.innerHTML = loading();
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
