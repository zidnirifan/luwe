import 'regenerator-runtime'; /* for async await transpile */
import './../scss/main.scss';
import './../component/navbar';
import './../component/hero';

const navBar = document.createElement('nav-bar');

document.querySelector('header').appendChild(navBar);

const sidebarActive = () => {
  document.querySelectorAll('.sidenav, .sidenav-overlay').forEach((e) => {
    e.classList.add('active');
  });
};

navBar.clickEvent = sidebarActive;

