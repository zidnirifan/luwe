import router from './router';
import home from '../pages/home';
import about from '../pages/about';
import favorite from '../pages/favorite';
import detail from '../pages/detail';

const routeTable = {
  '': home,
  '#/favorite': favorite,
  '#/about': about,
  '#/detail': detail,
};

router(routeTable);
