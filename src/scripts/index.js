import 'regenerator-runtime'; /* for async await transpile */
import '../scss/main.scss';
import './components/nav-bar';
import './routes/routes';

const navBar = document.createElement('nav-bar');
document.querySelector('header').appendChild(navBar);

const openSidebar = () => {
  document.querySelectorAll('.sidenav, .sidenav-overlay').forEach((e) => {
    e.classList.add('active');
  });
};

const closeSidebar = () => {
  document.querySelectorAll('.active').forEach((e) => {
    e.classList.remove('active');
  });
};

navBar.openSidebar = openSidebar;
navBar.closeSidebar = closeSidebar;
