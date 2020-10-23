import './../salo/style-salo.css'
import { cardItem } from './../carditem/index.js'
import helpers from './../helpers/index.js'
import services from './../services/index.js'
// createSale('sale')

// createSale()
export function createSale(nameCategory, nameProduct,  bool) {
  const constructor = document.querySelector('.page-main .container');
let copyData = []
let defData = []

  constructor.innerHTML = '';
  constructor.insertAdjacentHTML('beforeend', `
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
  {{!-- тут будет Марка  объект --}}
  <div class="sale-button"></div>
  <p class="sale-text-page"></p>
</div>
<section class="sale-section">`);

const list = document.querySelector('.sale-sort-list');
// document.querySelector('.sale-page')
// document.querySelector('.sale-button').append(pages)
// document.querySelector('.sale-text-page').append(buttons)
// let data = {}
// let buttons = {}
// let pages = {}
// [data, buttons, pages] = funkMark(nameCategory, nameProduct)
//  copyData = data
//  defData = data
// cardItem(data, list, bool)
  let elem, page
  if (helpers.isMobile) {
    elem = 6
  } else if (helpers.isTablet) {
    elem = 9
  } else if (helpers.isDesktop) {
    elem = 10
  }
  services.searchProducts(nameProduct, nameCategory, elem, page).then(({data}) => {
    console.log(data);

    copyData = data
    defData = data

    return cardItem(data, list, bool);
  })
 // ==============================================================================
let selector = document.querySelector('select')
selector.addEventListener('input', (e) => {
  console.log(selector.value);
  if (selector.value === 'default') {
    list.innerHTML = ''
    cardItem(defData, list, boole)
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
    cardItem(copyData, list, bool)
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
  cardItem(copyData, list, true)
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
  cardItem(copyData, list, bool)
}

};

