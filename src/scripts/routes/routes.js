import router from './router';
import home from '../pages/home';
import about from '../pages/about';
import favorite from '../pages/favorite';

const routeTable = {
  '': home,
  '#/favorite': favorite,
  '#/about': about,
};

router(routeTable);
