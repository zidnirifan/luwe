import router from './router';
import home from '../pages/home';
import about from '../pages/about';
import favorite from '../pages/favorite';

router('', home);
router('#/about', about);
router('#/favorite', favorite);
