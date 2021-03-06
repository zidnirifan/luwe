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
        // to save curren url into local storage
        localStorage.setItem('currentUrl', hash);
        main.innerHTML = loading();
        main.innerHTML = await routeTable[url].page();
        document.getElementById('footer')
          .innerHTML = '<footer>Copyright © 2021 - Luwe</footer>';
      } catch (error) {
        main.innerHTML = errorPage();
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    // to avoid 404 page when skip link clicked
    if (hash === '#main') main.scrollIntoView();
    else if (routeTable[url] === undefined) main.innerHTML = notFound();
    else if (routeTable[url].exact && hash === url) loadContent();
    else if (!routeTable[url].exact && hash.includes(url)) loadContent();
    else main.innerHTML = notFound();
  };

  window.addEventListener('hashchange', () => {
    loadPage();
  });
  document.addEventListener('DOMContentLoaded', async () => {
    // to avoid error if refresh when hash url = #main
    if (window.location.hash === '#main') {
      window.location.hash = localStorage.getItem('currentUrl');
    } else loadPage();
  });
};

export default router;
