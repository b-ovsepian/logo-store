import css from '../cart/styles.css';
import apiService from './apiService';
import template from './templates/shopping-cart-template.hbs';
import apiServic from './apiService.js';
// import items from './items.json';
import {modalModule} from '../modalmodule/modal';

// console.log(items);




export const commonRender=(items)=>{
let btnMin = document.querySelector('.decriment-button');
let btnPlus = document.querySelector('.increment-button');
let span = document.querySelector('.counter-value');
let item = document.querySelectorAll('.wrapper');

let itemSum = document.querySelector('.counter-sum span');
let sum = document.querySelector('.sum');
const result = document.querySelector('.result');

   const array = items.map(item => ({
    id: item.id,
    image: item.images[0],
    price: item.price,
    totalQuantity: items.totalQuantity}));

    const data = template(array)
    console.log(data);
    const cartList = document.querySelector('.cart-list');
    cartList.insertAdjacentHTML('beforebegin', data)

  let price = +result.textContent;
  btnMin.addEventListener('click', () => {
    counter.minus();
    counter.getSum(price);
  });
  btnPlus.addEventListener('click', () => {
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
      console.log('count', this.count);
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
}




 


//   function createListeners(closebackdrop) {
//     const myButton = document.querySelector('.hello');
//     myButton.addEventListener('click', closebackdrop);
//   }
//   modalModule(renderList, createListeners);
// }

