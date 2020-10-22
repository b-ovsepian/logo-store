import style from './style.css';
import refs from '../../refs/index.js';
import axios from 'axios';
import viewport from './viewport.js';

const pagination = {
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

const countOfProducts = async category => {
  const result = await axios.get(
    `https://back24.herokuapp.com/products/getCategories?category=${category}`,
  );
  pagination.countOfProducts = result.data.countOfProducts;
  return result.data.countOfProducts;
};

export async function createPagination(category) {
  countOfProducts(category).then(() => {
    const showQuantity = document.querySelector('.show-quantity');
    minAndMaxProducts();
    showQuantity.innerHTML = `Показано с ${pagination.minProducts} по ${pagination.maxProducts} из ${pagination.countOfProducts}`;
  });

  const list = document.querySelector('.pagination-list');
  list.innerHTML = await getListItemsMarkup(category);
  list.querySelector('[data-btn="btn"]').classList.add('active');
  const showQuantity = document.querySelector('.show-quantity');

  list.addEventListener('click', async e => {
    list.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    const data = await getProducts(Number(e.target.dataset.page));
    pagination.currentPage = Number(e.target.dataset.page);

    minAndMaxProducts();
    showQuantity.innerHTML = `Показано с ${pagination.minProducts} по ${pagination.maxProducts} из ${pagination.countOfProducts}`;
    return data.data;
  });
}

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

const getListItemsMarkup = async category => {
  let markup = '';
  pagination.pagesCount = await countOfProducts(category);
  console.log(pagination.pagesCount);
  for (let i = 1; i <= Math.ceil(pagination.pagesCount / elem); i += 1) {
    markup += getItemMarkup(i);
  }
  return markup;
};

const getProducts = async (page = 1, perPage = elem, category = 'ref') => {
  return await axios.get(
    `https://back24.herokuapp.com/products?itemsPerPage=${perPage}&page=${page}&category=${category}`,
  );
};

createPagination('');

//=============================================================//