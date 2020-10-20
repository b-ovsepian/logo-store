import './modalmodule/modal';
import './authform/authform';
import developers from './developers';
import header from './header';
// import information from './information';
import footer from './footer';
import services from './services';
import store from './store';
import slider from './slider';
import hero from './hero';
import './category/category.js';
import helpers from './helpers';

// Тянем категории
services.getCategories();
setTokenToStore();

function setTokenToStore() {
  const localToken = localStorage.getItem('user_token');
  localToken ? (store.auth.accces_token = localToken) : '';
}
