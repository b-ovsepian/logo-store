import services from './services';
import store from './store';
import helpers from './helpers';
import slider from './slider';
import modalModule from './modalmodule/modal.js';

import header from './header';
import authForm from './authform/authform.js';
import profile from './profile';
import newADV from './newADV';
import searh from './search/search.js';

import footer from './footer';

import loader from './loader';
import renderMainPage from './mainPage';

import category from './category/category.js';
// import paginationModule from './paginationModule/index.js';

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

services
  .getCategories()
  .then(() => {
    renderMainPage();
  })
  .finally(() => {
    loader.closeLoader();
  });
