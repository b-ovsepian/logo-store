import store from '../store';
import refs from '../../refs';

export function exitUser() {
  localStorage.clear();
  store.user = {};
  closeBackdrop();
}

export function closeBackdrop() {
  refs.lightbox.classList.remove('is-open');
  refs.body.style.overflow = 'visible';
  refs.backdrop.style.overflow = 'visible';
}

const viewport = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};
const viewportFunction = function () {
  if (window.innerWidth < 768) {
    viewport.isMobile = true;
    viewport.isTablet = false;
    viewport.isDesktop = false;
  } else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
    viewport.isTablet = true;
    viewport.isMobile = false;
    viewport.isDesktop = false;
  } else if (window.innerWidth >= 1200) {
    viewport.isDesktop = true;
    viewport.isMobile = false;
    viewport.isTablet = false;
  }
  return viewport;
};

export default viewportFunction();
