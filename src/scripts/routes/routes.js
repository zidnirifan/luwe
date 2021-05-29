import router from './router';
import home from '../pages/home';
import about from '../pages/about';
import favorite from '../pages/favorite';
import detail from '../pages/detail';

const routeTable = {
  '': {
    page: home,
    exact: true,
  },
  '#/favorite': {
    page: favorite,
    exact: true,
  },
  '#/about': {
    page: about,
    exact: true,
  },
  '#/restaurant': {
    page: detail,
    exact: false,
  },
};

router(routeTable);
