import './modalmodule/modal';
import './authform/authform';
// import services from './services';

import developers from './developers';
import header from './header';
// import information from './information';
// import './salo/index.js'
// import renderInformation from './information';
import renderTelephoneTrigger from './telephoneTrigger';
import footer from './footer';
import services from './services';
import store from './store';

// import slider from './slider';
// import hero from './hero';
import './category/category.js';
import helpers from './helpers';
// import cardItem from './carditem/index.js';
import loader from './loader';
import { modalModule } from './modalmodule/modal';

// Тянем категории
// services.getCategories();
// setTokenToStore();

// function setTokenToStore() {
//   const localToken = localStorage.getItem('user_token');
//   localToken ? (store.auth.accces_token = localToken) : '';
// }


import catalog from "./catalog/catalog.js"

function setTokenToStore() {
  const localToken = localStorage.getItem('user_token');
  localToken ? (store.auth.accces_token = localToken) : '';
}


// loader.renderLoader();

// Тянем категории

// services.getCategories().then(() => {
//   renderInformation();
//   renderTelephoneTrigger();
//   loader.closeLoader();
// });

// services.getCategories().then(() => {
//   renderInformation();
//   renderTelephoneTrigger();
//   loader.closeLoader();
// });

