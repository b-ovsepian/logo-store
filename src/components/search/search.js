import './search_styles.css';
import servicesApi from '../services/index.js';
import refsSearch from './refsSearch.js';
import { cardItem } from '../carditem/index.js';
import searchTemplate from '../../templates/searchTemplate.hbs';
import { modalModule } from '../modalmodule/modal.js';
import store from '../store/index.js';
import refs from '../../refs/index.js';

const searchButtonHandler = () => {
  const createListeners = closeBackdrop => {
    const submitHandler = event => {
      event.preventDefault();
      const data = new FormData(event.target);
      const searchInputValue = data.get('searchInput');

      if (!searchInputValue) return;

      servicesApi
        .searchProducts(searchInputValue, '', 12, 1)
        .then(({ data }) => {
          console.log(data);

          const container = document.querySelector('main .container');
          container.innerHTML = '<ul class="searchList list card-list"></ul>';

          cardItem(data, container.firstChild);

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

//это кнопка из хедера должна быть.
// document
//   .querySelector('.modalbtn')
//   .addEventListener('click', searchButtonHandler);