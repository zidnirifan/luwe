import loading from '../elements/loading';
import errorPage from '../pages/error';
import notFound from '../pages/404';

const router = (routeTable) => {
  const urls = Object.getOwnPropertyNames(routeTable);

  const loadContent = async () => {
    const main = document.querySelector('main');
    const url = urls.filter((e) => window.location.hash === e)[0];
    try {
      if (window.location.hash === url) {
        main.innerHTML = loading();
        main.innerHTML = await routeTable[url]();
      } else {
        main.innerHTML = notFound();
      }
    } catch (error) {
      main.innerHTML = errorPage();
      console.log(error);
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
