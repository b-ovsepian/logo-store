import css from '../cart/styles.css';



//Функция которая считает сумму
// значение свойтсва цены из  обьекта товара умножить на значение textContent из спана


const btnMin = document.querySelector('.decriment-button');
const btnPlus = document.querySelector('.increment-button');
const span = document.querySelector('.counter-value')
const counter = {
  count: 1,

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
};

btnMin.addEventListener('click', () => {
  counter.minus();
});

btnPlus.addEventListener('click', ()=> {
  counter.plus()
})
