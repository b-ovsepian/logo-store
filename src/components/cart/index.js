import css from '../cart/styles.css';
import apiService from './apiService';
import template from './templates/shopping-cart-template.hbs';
import apiServic from './apiService.js';
import items from './items.json';
const cartList = document.querySelector('.cart-list');


console.log(items);
const array = items.map(item => ({
  id: item.id,
  image: item.images[0],
  price: item.price,
  totalQuantity: items.totalQuantity}));
const data = template(array)
console.log(data);
cartList.insertAdjacentHTML('beforebegin', data)

// console.log(template);

// let cartList ///= document.querySelector('.cart-list');
let btnMin = document.querySelector('.decriment-button');
let btnPlus = document.querySelector('.increment-button');
let span = document.querySelector('.counter-value');
let item = document.querySelectorAll('.wrapper');

let itemSum = document.querySelector('.counter-sum span');
let sum = document.querySelector('.sum');
const result = document.querySelector('.result');
// console.log(result);
// console.log(btnMin, btnPlus);
renderApi();
// function plusMin() {
// }
let price = +result.textContent;
btnMin.addEventListener('click', () => {
  counter.minus();
  counter.getSum(price);
});
btnPlus.addEventListener('click', () => {
  counter.plus();
  counter.getSum(price);
});

function renderApi() {
  apiServic.fetchImage().then(data => {
    // renderList(data.hits);
    // console.log(data);
  });
}

const counter = {
  count: 1,
  sum: 0,

  plus() {
    this.count += 1;
    span.textContent = this.count;
    // this.getSum();
  },
  // sum.textContent = this.count * Number.parseInt(itemSum.textContent);
  // const result1 = sum * this.count;
  // result.textContent = result1;
  minus() {
    if (this.count > 1) {
      this.count -= 1;
      span.textContent = this.count;
      // this.getSum();
    }
  },
  getSum(price) {
    console.log('count', this.count);
    // console.log('result', result.textContent);
    this.sum = this.count * price;
    console.log(this.sum);

    itemSum.textContent = this.sum;
    sum.textContent = this.sum;
    result.textContent = this.sum;

    return this.sum;
  },
  sumAll() {
    const itemSumArr = document.querySelector('.sum');
    const resultText = document.querySelector('.result-text');
    itemSumArr.forEach(item => {
      this.sum = Number.parseInt(item.textContent);
      resultText.forEach(item => {
        this.sum = Number.parseInt(item.textContent);
      });
    });
    result.textContent = this.sum;
    result.textContent = this.sum;
  },
};

function renderList(data) {
  const list = template(data);
  console.log(list);
  cartList.insertAdjacentHTML('beforeend', list);

  // cartList = document.querySelector('.cart-list');
  // btnMin = document.querySelector('.decriment-button');
  // btnPlus = document.querySelector('.increment-button');
  // span = document.querySelector('.counter-value');
  // itemSum = document.querySelector('.counter-sum');
  // item = document.querySelectorAll('.wrapper');
  // sum = document.querySelector('.sum');
}
