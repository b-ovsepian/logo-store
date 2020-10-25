import './../salo/style-salo.css';
import { cardItem } from './../carditem/index.js';
import helpers from './../helpers/index.js';
import services from './../services/index.js';
import { getSearch } from './../search/search.js';

// createSale()
export function createSale(nameCategory = '', array, bool = false) {
  if (nameCategory) {
    getSearch(nameCategory);
  }
}
export function createItems(array, nameCategory, bool = false) {
  const constructor = document.querySelector('main .container');
  constructor.insertAdjacentHTML(
    'afterbegin',
    `
  <section class="section">
  <div class="sale-div">
  <h1 class="sale-title">${nameCategory}</h1>
  <label id="sale-label" for="sale-sort">Сортировка:</label>
  <select id="products">
  <option value="default" selected>По умолчанию</option>
  <option value="ascPrice">По возрастанию цены</option>
  <option value="desPrice">По убыванию цены</option>
  <option value="Alph">По алфавиту</option>
  </select>
  </div>
  <ul class="sale-sort-list list"></ul>
  <div class="sale-page">
  <div class="sale-button"></div>
  <p class="sale-text-page"></p>
  </div>
  <section class="sale-section">`,
  );

  const list = document.querySelector('.searchList');
  let data = array;

  function render(array) {
    cardItem(array, list, bool);
  }

  let copyData = data;
  let defData = data;

  let selector = document.querySelector('select');
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
