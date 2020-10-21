import './modalmodule/modal';
import './authform/authform';
import developers from './developers';
import renderInformation from './information';
import renderTelephoneTrigger from './telephoneTrigger';
import footer from './footer';
import services from './services';
import store from './store';
import slider from './slider';
import hero from './hero';
import './category/category.js';
import helpers from './helpers';
import cardItem from './carditem/index.js';

// Тянем категории
services.getCategories();
setTokenToStore();

function setTokenToStore() {
  const localToken = localStorage.getItem('user_token');
  localToken ? (store.auth.accces_token = localToken) : '';
}

renderInformation();
renderTelephoneTrigger();
