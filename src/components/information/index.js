import './information.css';
import refs from '../../refs';
import infoData from './information.js';
import infoTmpl from '../../templates/information.hbs';
import { modalModule } from '../modalmodule/modal';

function renderInformation() {
  const infoBtn = document.querySelector('.js-info');
  infoBtn.addEventListener('click', showInfo);

  function showInfo() {
    function infoMarkup() {
      const div = document.createElement('div');
      const informationDiv = document.createElement('div');
      informationDiv.classList.add('information');
      const ulList = document.createElement('ul');
      ulList.classList.add('information-list');
      ulList.classList.add('list');
      const markup = infoTmpl(infoData);
      ulList.insertAdjacentHTML('beforeend', markup);
      informationDiv.insertAdjacentElement('beforeend', ulList);
      informationDiv.innerHTML += `<div class="information-close-icon"></div>`;
      div.insertAdjacentElement('beforeend', informationDiv);
      return div.innerHTML;
    }

    function createListeners(closebackdrop) {
      const myButton = document.querySelector('.information-close-icon');
      myButton.addEventListener('click', closebackdrop);
    }
    modalModule(infoMarkup, createListeners);
  }
}

export default renderInformation;

/*
const modalBTN = document.querySelector('.modalbtn');
modalBTN.addEventListener('click', product);

function product() {
  function buyGoods() {
    // example for markup
    return `<div>hey<button class="hello">GET</button></div>`;
  }
  function createListeners(closebackdrop) {
    const myButton = document.querySelector('.hello');
    myButton.addEventListener('click', closebackdrop);
  }
  modalModule(buyGoods, createListeners);
}
*/
