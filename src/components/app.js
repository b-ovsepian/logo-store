import './modalmodule/modal';
import './authform/authform';
import header from './header';
import developers from './developers';
// import renderInformation from './information';
import renderTelephoneTrigger from './telephoneTrigger';
import footer from './footer';
import services from './services';
import store from './store';
import profile from './profile';
// import catalog from './catalog/catalog.js';
import './search/search.js';
import slider from './slider';
import hero from './hero';
import './category/category.js';
// import './breadcrumbs/index.js';
import helpers from './helpers';
// import cardItem from './carditem/index.js';
import loader from './loader';
// import authMenu from './authMenu/index.js';
import newADV from './newADV/index.js';
import './newproducts/index';
// import paginationModule from './paginationModule/index.js';
import { modalModule } from './modalmodule/modal';

loader.renderLoader();
setTokenToStore();
setCartToStore();

function setTokenToStore() {
  const localToken = localStorage.getItem('user_token');
  const localToken2 = JSON.parse(localStorage.getItem('info'));

  if (localToken) {
    store.auth.accces_token = localToken;
    services.getCurrentUser();
  } else if (localToken2) {
    store.auth.accces_token = localToken2.token;
    services.getCurrentUser();
  } else {
    console.log('Нет токина, нужно залогиниться');
    store.auth.accces_token = '';
  }
}

function setCartToStore() {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  store.cart = localCart;
}

// Тянем категории
services
  .getCategories()
  .then(() => {
    // renderInformation();
    renderTelephoneTrigger();
  })
  .finally(() => {
    loader.closeLoader();
  });
