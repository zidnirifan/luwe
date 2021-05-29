import loading from '../elements/loading';
import errorPage from '../pages/error';
import notFound from '../pages/404';

const router = (routeTable) => {
  const urls = Object.getOwnPropertyNames(routeTable);

  const loadPage = () => {
    const main = document.querySelector('main');
    const { hash } = window.location;
    const url = urls.filter((e) => {
      if (e !== '') return hash.includes(e);
      return hash === e;
    })[0];

    const loadContent = async () => {
      try {
        main.innerHTML = loading();
        main.innerHTML = await routeTable[url].page();
      } catch (error) {
        main.innerHTML = errorPage();
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    if (routeTable[url] === undefined) main.innerHTML = notFound();
    else if (routeTable[url].exact && hash === url) loadContent();
    else if (!routeTable[url].exact && hash.includes(url)) loadContent();
    else main.innerHTML = notFound();
  };

  window.addEventListener('hashchange', () => {
    loadPage();
  });
  document.addEventListener('DOMContentLoaded', () => {
    loadPage();
  });
};

export default router;
