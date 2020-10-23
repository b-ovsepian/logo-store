import store from '../store';
import refs from '../../refs';

function exitUser() {
  localStorage.clear();
  store.user = {};
  closeBackdrop();
}

function closeBackdrop() {
  refs.lightbox.classList.remove('is-open');
  refs.body.style.overflow = 'visible';
  refs.backdrop.style.overflow = 'visible';
}

export default exitUser;
