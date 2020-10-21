import newADV from './newADV/index.js'
import services from './services';

// Тянем категории
services.getCategories();
setTokenToStore();

function setTokenToStore() {
  const localToken = localStorage.getItem('user_token');
  localToken ? (store.auth.acces_token = localToken) : '';
}

// renderInformation();
