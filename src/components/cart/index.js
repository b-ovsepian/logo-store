import css from '../cart/styles.css';
import apiService from './apiService';
import template from './templates/shopping-cart-template.hbs';
import apiServic from './apiService.js';
console.log(template);

const cartList = document.querySelector('.cart-list');
const btnMin = document.querySelector('.decriment-button');
const btnPlus = document.querySelector('.increment-button');
const span = document.querySelector('.counter-value');
const itemSum = document.querySelector('.counter-sum');
const item = document.querySelectorAll('.wrapper');
const sum = document.querySelector('.sum');

function renderApi () {
apiServic.fetchImage().then(dickhead => renderList(dickhead))
}
renderApi()
// let result = document.querySelector('.result');
// const counter = {
//   count: 1,
//   sum: 0,

//   plus() {
//     this.count += 1;
//     span.textContent = this.count;
//     sum.textContent = this.count * Number.parseInt(itemSum.textContent);
//     const result1 = sum * this.count;
//     result.textContent = result1;
//   },
//   minus() {
//     if (this.count > 1) {
//       this.count -= 1;
//       span.textContent = this.count;
//     }
//   },
//   sumAll() {
//     const itemSumArr = document.querySelectorAll('.sum');
//     itemSumArr.forEach(item => {
//       this.sum = Number.parseInt(item.textContent);
//     });
//     result.textContent = this.sum;
//   },
// };

// btnMin.addEventListener('click', () => {
//   counter.minus();
// });

// btnPlus.addEventListener('click', () => {
//   counter.plus();
//   counter.sumAll();
// });


function renderList(data) {
  const list = template(data);
  // const cartList = document.querySelector('.cart-list');
  cartList.insertAdjacentHTML('beforeend', list);
}
