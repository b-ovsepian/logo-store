import developers from './developers';
// import information from './information';
import footer from './footer';
import services from './services';
import store from './store';
import './category/category.js';

// Тянем категории
services.getCategories();
setTokenToStore();

function setTokenToStore() {
  const localToken = localStorage.getItem('user_token');
  localToken ? (store.auth.accces_token = localToken) : '';
}
