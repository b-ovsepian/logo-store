import './loader.css';
import refs from '../../refs';
import { modalModule } from '../modalmodule/modal';

export default {
  renderLoader() {
    function loaderMarkup() {
      const div = document.createElement('div');
      const loader = document.createElement('div');
      loader.classList.add('loader');
      loader.textContent = 'Loading...';
      div.insertAdjacentElement('beforeend', loader);
      return div.innerHTML;
    }
    function createListeners(closebackdrop) {}

    modalModule(loaderMarkup, createListeners);
    refs.backdrop.classList.add('loader-backdrop');
  },
  closeLoader() {
    refs.lightbox.classList.remove('is-open');
    refs.body.style.overflow = 'visible';
    refs.backdrop.style.overflow = 'visible';
    refs.backdrop.classList.remove('loader-backdrop');
  },
};
