import './modalmodule/modal';
import './authform/authform';
import developers from './developers';
// import information from './information';
import footer from './footer';
import services from './services';
import store from './store';
import './category/category.js';
import './AuthMenu/index';

// Тянем категории
services.getCategories();
setTokenToStore();
// AuthMenu()

function setTokenToStore() {
  const localToken = localStorage.getItem('user_token');
  localToken ? (store.auth.accces_token = localToken) : '';
}
