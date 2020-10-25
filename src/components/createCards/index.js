import './../salo/style-salo.css'
import { cardItem } from './../carditem/index.js'
import helpers from './../helpers/index.js'
import services from './../services/index.js'
import { getSerch } from './../search/search.js'
import paginationModule from './../paginationModule/index.js'


// createSale()
export function createSale(nameCategory = '', array, bool = false) {
  const constructor = document.querySelector('.page-main .container');
  if (nameCategory) {
    getSerch('', nameCategory, true)
    createItems(array)
  }
  if (array.length > 0) {
    createItems(array, bool)
  }

};
function createItems(array, bool = false) {

  constructor.innerHTML = '';
  constructor.insertAdjacentHTML('beforeend', `
  <section class="section">
  <div class="sale-div">
  <h1 class="sale-title">${nameCategory ? nameCategory : 'Ваш поиск: '}</h1>
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
  {{!-- тут будет Марка  объект --}}
  <div class="sale-button"></div>
  <p class="sale-text-page"></p>
  </div>
  <section class="sale-section">`);

  const list = document.querySelector('.sale-sort-list');
  let data = {}
  let buttons = {}
  let pages = {}


  render(array, bool)
  function render(array, bool = false) {
    document.querySelector('.sale-button').append(pages)
    document.querySelector('.sale-text-page').append(buttons)

    [data, buttons, pages] = paginationModule.funkMark(array) //запустить Марка функцию и получить карточки для проресовки, кнопки и текст со страницами
    cardItem(data, list, bool)
    // cardItem(array, list, bool) // на случай, если Марка фукция не заработает!!!
  }


  let copyData = data;
  let defData = data;
  let selector = document.querySelector('select')
  selector.addEventListener('input', (e) => {
    if (selector.value === 'default') {
      list.innerHTML = ''
      render(defData, bool)
    }
    if (selector.value === 'ascPrice') {
      ascPrice()
    }
    if (selector.value === 'desPrice') {
      desPrice()
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
      list.innerHTML = ''
      render(copyData, bool)
    }
  })

  function ascPrice() {
    for (let i = 0; i < copyData.length; i++) {
      for (let j = i; j < copyData.length; j++) {
        if (+copyData[i].price > +copyData[j].price) { // + защита от дураков
          let variable = copyData[i]
          copyData[i] = copyData[j]
          copyData[j] = variable
        }
      }
    }
    list.innerHTML = ''
    render(copyData, bool)
  }

  function desPrice() {
    for (let i = 0; i < copyData.length; i++) {
      for (let j = i; j < copyData.length; j++) {
        if (+copyData[i].price < +copyData[j].price) { // + защита от дураков
          let variable = copyData[i]
          copyData[i] = copyData[j]
          copyData[j] = variable
        }
      }
    }
    list.innerHTML = ''
    render(copyData, bool)
  }
}
