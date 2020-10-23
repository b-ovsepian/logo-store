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
import './breadcrumbs/index.js';
import helpers from './helpers';
import cardItem from './carditem/index.js';
import loader from './loader';
import newADV from './newADV/index.js';
import './newproducts/index';
// import paginationModule from './paginationModule/index.js';
import { modalModule } from './modalmodule/modal';

loader.renderLoader();
setTokenToStore();
services.getCurrentUser();
setCartToStore();

function setTokenToStore() {
  const localToken = localStorage.getItem('user_token');
  const localToken2 = JSON.parse(localStorage.getItem('info'));
  localToken
    ? (store.auth.accces_token = localToken)
    : (store.auth.accces_token = localToken2.token);
}

function setCartToStore() {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  store.cart = localCart;
}

// Тянем категории
services.getCategories().then(() => {
  // renderInformation();
  renderTelephoneTrigger();
  loader.closeLoader();
});
