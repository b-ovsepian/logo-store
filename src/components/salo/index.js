import './style-salo.css'

import refs from "./../../refs/index.js"
import helpers from './../helpers/index.js'
import services from "./../services/index.js"
import { cardItem } from './../carditem/index.js'
const constructor = document.querySelector('.page-main .container');
let copyData = []
let defData = []
createSale()
function createSale() {
  constructor.innerHTML = "";
  constructor.insertAdjacentHTML('beforeend', `
  <section class="sale-section">
  <div class="sale-div">
  <h1 class="sale-title">Акции</h1>
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
  <p class="sale-text-page"></p>
</div>
<section class="sale-section">`);
};
const list = document.querySelector('.sale-sort-list');
setTimeout(() => {
  let elem, page
  if (helpers.isMobile) {
    elem = 6
  } else if (helpers.isTablet) {
    elem = 9
  } else if (helpers.isDesktop) {
    elem = 10
  }
  services.searchProducts("", 'sale', elem, page).then(data => {
    console.log(data);
    // console.log(data);
    copyData = data
    defData = data
    // console.log(copyData[0].price);
    
    return cardItem(data, list, true)
  })
}, 1000);
let selector = document.querySelector('select')
selector.addEventListener('input', (e) => {
  console.log(selector.value);
  if (selector.value === 'default') {
    list.innerHTML = ''
    cardItem(defData, list, true)
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
    cardItem(copyData, list, true)
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
  cardItem(copyData, list, true)
}



//   const sort = document.querySelector('#sale-sorts');

// function sortSale (e){
// let list, i, switching, items, shouldSwitch, dir;
// let = switchcount = 0;
//   list = document.querySelector(".sale-sort-list");
//   switching = true;
//   // Устанавливаем направление сортировки по возрастанию:
//   dir = "asc";
//   // Создаем цикл, который будет продолжаться до тех пор, пока переключение не будет выполнено:
//   while (switching) {
//     // Начнем с того, что переключение не выполняется:
//     switching = false;
//     items = list.getElementsByTagName("LI");
//     // Перебираем все элементы списка:
//     for (i = 0; i < (items.length - 1); i++) {
//       // Начнем с того, что переключения быть не должно:
//       shouldSwitch = false;
//       /* Проверяем, должен ли следующий элемент поменяться местами с текущим,
//       в зависимости от направления сортировки (по возрастанию или по убыванию: */
//       if (dir == "asc") {
//         if (items[i].innerHTML.toLowerCase() > items[i + 1].innerHTML.toLowerCase()) {
//           /*  Если следующий элемент по алфавиту ниже текущего,
//           пометить как переключатель и остановить цикл: */
//           shouldSwitch = true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (items[i].innerHTML.toLowerCase() < items[i + 1].innerHTML.toLowerCase()) {
//           /* Если следующий элемент по алфавиту выше текущего,
//           пометить как переключатель и разорвать цикл: */
//           shouldSwitch= true;
//           break;
//         }
//       }
//     }
//     if (shouldSwitch) {
//       /* Если переключатель был отмечен, делаем переключатель
//       и отметьте, что переключение было выполнено: */
//       items[i].parentNode.insertBefore(items[i + 1], items[i]);
//       switching = true;
//       // Каждый раз, когда переключение выполняется, увеличивайте switchcount на 1:
//       switchcount ++;
//     } else {
//       /*  Если переключение не было выполнено И направление - "asc",
//       установите направление «desc» и снова запустите цикл while. */
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }
// }