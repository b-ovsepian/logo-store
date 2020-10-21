import store from '../store/index.js';
// Функция выхода из меню личный кабинет, затирает токен и вызывает функцию рендеринга главной страницы:

export const logOut = () => {
  // затираю токен:
  store.auth.accces_token = '';
  //вызываю функцию рендеринга главной страницы:
  //...
};
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
