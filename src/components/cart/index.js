import css from '../cart/styles.css';
import apiService from './apiService';
import template from './templates/shopping-cart-template.hbs';
import apiServic from './apiService.js';
import dataBase from './items.json';
import { modalModule } from '../modalmodule/modal';
import { data } from 'autoprefixer';

const cartList = document.querySelector('.cart-list');


// console.log(dataBase);
renderArray(dataBase);

function renderArray(data) {
  const objArray = data.map(elem => ({
    id: elem._id,
    image: elem.images[0],
    price: elem.price,
    totalQuantity: elem.totalQuantity,
  }));

  const items = template(objArray);
  // console.log(objArray);
  cartList.insertAdjacentHTML('afterbegin', items);
}
let btnMin = document.querySelector('.decriment-button');
let btnPlus = document.querySelector('.increment-button');
let span = document.querySelector('.counter-value');
let item = document.querySelectorAll('.wrapper');
let itemSum = document.querySelector('.counter-sum span');
let sum = document.querySelector('.sum');
const result = document.querySelector('.result');

let price = +result.textContent;
btnMin.addEventListener('click', event => {
  console.log(event.target.dataset.id);
  counter.minus();
  counter.getSum(price);
});

btnPlus.addEventListener('click', event => {
  console.log(event.target.dataset.id);
  counter.plus();
  counter.getSum(price);
});

const counter = {
  count: 1,
  sum: 0,

  plus() {
    this.count += 1;
    span.textContent = this.count;
  },

  minus() {
    if (this.count > 1) {
      this.count -= 1;
      span.textContent = this.count;
    }
  },

  getSum(price) {
    // console.log('count', this.count);
    this.sum = this.count * price;
    // console.log(this.sum);

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

function arrFilt(data){
  data.filter(el => {
    console.log();
  })
}

cartList.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
})