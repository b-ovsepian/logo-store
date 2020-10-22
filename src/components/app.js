import './modalmodule/modal';
import './authform/authform';
import header from './header';
import developers from './developers';
// import renderInformation from './information';
import renderTelephoneTrigger from './telephoneTrigger';
import footer from './footer';
import services from './services';
import store from './store';
// import catalog from './catalog/catalog.js';
import slider from './slider';
import hero from './hero';
import './category/category.js';
import './breadcrumbs/index.js';
import helpers from './helpers';
import cardItem from './carditem/index.js';
import loader from './loader';
import authMenu from './authMenu/index.js';
import paginationModule from './paginationModule/index.js';
import { modalModule } from './modalmodule/modal';

setTokenToStore();

function setTokenToStore() {
  const localToken = localStorage.getItem('user_token');
  localToken ? (store.auth.accces_token = localToken) : '';
}

loader.renderLoader();

// Тянем категории
services.getCategories().then(() => {
  // renderInformation();
  renderTelephoneTrigger();
  loader.closeLoader();
});
