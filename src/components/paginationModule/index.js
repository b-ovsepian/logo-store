import style from './style.css';
import refs from '../../refs';
import axios from 'axios';
import viewport from '../helpers';
import services from '../services';
import templateCardItem from '../carditem/templateCardItem.hbs';
import { getSearch } from './../search/search.js';
import { cardItem } from './../carditem/index.js';

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

const createPagination = function (Object, query, category = '') {
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
        .searchProducts(pagination.query, category, elem, page)
        .then(({ data }) => {
          const searchList = document.querySelector('.searchList');
          searchList.innerHTML = '';
          pagination.currentPage = page;
          createItems(data, pagination.query);
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

function createItems(array, nameCategory, bool = false) {
  const list = document.querySelector('.searchList');
  let data = array;

  function render(array) {
    cardItem(array, list, bool);
  }

  let copyData = data;
  let defData = data;

  let selector = document.querySelector('select');

  if (selector.value === 'default') {
    list.innerHTML = '';
    render(defData);
  }
  if (selector.value === 'ascPrice') {
    ascPrice();
  }
  if (selector.value === 'desPrice') {
    desPrice();
  }
  if (selector.value === 'Alph') {
    copyData.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    list.innerHTML = '';
    render(copyData);
  }

  selector.addEventListener('input', e => {
    if (selector.value === 'default') {
      list.innerHTML = '';
      render(defData);
    }
    if (selector.value === 'ascPrice') {
      ascPrice();
    }
    if (selector.value === 'desPrice') {
      desPrice();
    }
    if (selector.value === 'Alph') {
      copyData.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      list.innerHTML = '';
      render(copyData);
    }
  });

  function ascPrice() {
    for (let i = 0; i < copyData.length; i++) {
      for (let j = i; j < copyData.length; j++) {
        if (+copyData[i].price > +copyData[j].price) {
          // + защита от дураков
          let variable = copyData[i];
          copyData[i] = copyData[j];
          copyData[j] = variable;
        }
      }
    }
    list.innerHTML = '';
    render(copyData);
  }

  function desPrice() {
    for (let i = 0; i < copyData.length; i++) {
      for (let j = i; j < copyData.length; j++) {
        if (+copyData[i].price < +copyData[j].price) {
          // + защита от дураков
          let variable = copyData[i];
          copyData[i] = copyData[j];
          copyData[j] = variable;
        }
      }
    }
    list.innerHTML = '';
    render(copyData);
  }
}
