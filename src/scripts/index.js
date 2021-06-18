import 'regenerator-runtime'; /* for async await transpile */
import './utils/sw-register';
import '../scss/main.scss';
import './app-shell';
import './routes/routes';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import favicon from '../public/images/favicon.png';

// to add favicon
document.getElementById('favicon').href = favicon;
