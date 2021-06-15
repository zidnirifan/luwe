import 'regenerator-runtime'; /* for async await transpile */
import './utils/sw-register';
import '../scss/main.scss';
import './routes/routes';
import './app-shell';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import favicon from '../public/images/favicon.png';

// to add favicon
document.getElementById('favicon').href = favicon;
