import './search_styles.css';
import servicesApi from '../services/index.js';
import refsSearch from './refsSearch.js';
import { cardItem } from '../carditem/index.js';
import searchTemplate from '../../templates/searchTemplate.hbs';
import { modalModule } from '../modalmodule/modal.js';
import store from '../store/index.js';
import refs from '../../refs/index.js';
import viewport from '../helpers';
import createPagination from '../paginationModule/index.js';
import { createItems } from '../createCards';

let elem;
if (viewport.isMobile) {
  elem = 6;
} else if (viewport.isTablet) {
  elem = 9;
} else if (viewport.isDesktop) {
  elem = 10;
}
export function getSearch(searchInputValue) {
  servicesApi.searchProducts('', searchInputValue, '', 1).then(({ data }) => {
    const container = document.querySelector('main .container');
    container.innerHTML = '';
    container.insertAdjacentHTML(
      'beforeend',
      '<ul class="searchList list card-list"></ul>',
    );
    const paginationDiv = document.createElement('div');
    paginationDiv.innerHTML = `<div class="pagination-wrapper">
      <ul class="pagination-list"></ul>
      <p class="show-quantity"></p>
    </div>`;
    container.insertAdjacentElement('beforeend', paginationDiv);
    const tenObjects = data.filter((value, index) => index < elem);
    createItems(tenObjects, searchInputValue);
    cardItem(tenObjects, document.querySelector('.searchList'));
    createPagination(data, '', searchInputValue);
    return tenObjects;
  });
}
const searchButtonHandler = () => {
  const createListeners = closeBackdrop => {
    const submitHandler = event => {
      event.preventDefault();
      const data = new FormData(event.target);
      const searchInputValue = data.get('searchInput');

      if (!searchInputValue) return;

      servicesApi
        .searchProducts(searchInputValue, '', '', 1)
        .then(({ data }) => {
          const container = document.querySelector('main .container');
          container.innerHTML = '';

          container.innerHTML = '<ul class="searchList list card-list"></ul>';
          const paginationDiv = document.createElement('div');
          paginationDiv.innerHTML = `<div class="pagination-wrapper">
      <ul class="pagination-list"></ul>
      <p class="show-quantity"></p>
    </div>`;
          container.insertAdjacentElement('beforeend', paginationDiv);
          const tenObjects = data.filter((value, index) => index < elem);
          createItems(tenObjects, searchInputValue);
          cardItem(tenObjects, document.querySelector('.searchList'));
          createPagination(data, searchInputValue);
          closeBackdrop();
        });
    };

    const searchButtonClose = document.querySelector('.searchButton__close');
    searchButtonClose.addEventListener('click', closeBackdrop);

    const searchForm = document.querySelector('.searchForm');
    searchForm.addEventListener('submit', submitHandler);
  };

  modalModule(searchTemplate, createListeners);
};

export default searchButtonHandler;
