import style from './style.css';
import refs from '../../refs';
import axios from 'axios';
import viewport from '../helpers';
import services from '../services';
import templateCardItem from '../carditem/templateCardItem.hbs';

const pagination = {
  query: '',
  currentPage: 1,
  pagesCount: 1,
  countOfProducts: 0,
  minProducts: 0,
  maxProducts: 0,
};

let elem;
if (viewport.isMobile) {
  elem = 6;
} else if (viewport.isTablet) {
  elem = 9;
} else if (viewport.isDesktop) {
  elem = 10;
}

const countOfProducts = function (Object) {
  pagination.countOfProducts = Object.length;
  return Object.length;
};

const createPagination = function (Object, query) {
  if (countOfProducts(Object) > 0) {
    pagination.query = query;
    const showQuantity = document.querySelector('.show-quantity');
    minAndMaxProducts();
    showQuantity.innerHTML = `Показано с ${pagination.minProducts} по ${pagination.maxProducts} из ${pagination.countOfProducts}`;

    const list = document.querySelector('.pagination-list');
    list.innerHTML = getListItemsMarkup(Object);
    list.querySelector('[data-btn="btn"]').classList.add('active');

    list.addEventListener('click', e => {
      list.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');
      const page = Number(e.target.dataset.page);
      services
        .searchProducts(pagination.query, '', elem, page)
        .then(({ data }) => {
          const searchList = document.querySelector('.searchList');
          searchList.innerHTML = '';
          pagination.currentPage = page;
          const markup = templateCardItem(data);
          searchList.insertAdjacentHTML('beforeend', markup);
          //           createPagination(data, pagination.query);
          minAndMaxProducts();
          showQuantity.innerHTML = `Показано с ${pagination.minProducts} по ${pagination.maxProducts} из ${pagination.countOfProducts}`;
        });
    });
  }
};

function minAndMaxProducts() {
  pagination.minProducts = pagination.currentPage * elem - elem + 1;

  pagination.maxProducts =
    pagination.currentPage * elem >= pagination.countOfProducts
      ? pagination.countOfProducts
      : pagination.currentPage * elem;
}

const getItemMarkup = pageNumber => {
  return `<button class="pagination-button" data-btn="btn" data-page=${pageNumber}>${pageNumber}</button>`;
};

const getListItemsMarkup = function (Object) {
  let markup = '';
  pagination.pagesCount = countOfProducts(Object);
  for (let i = 1; i <= Math.ceil(pagination.pagesCount / elem); i += 1) {
    markup += getItemMarkup(i);
  }
  return markup;
};

export default createPagination;
