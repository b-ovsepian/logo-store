import css from './category.css';
import refs from '../../refs/index.js';
import kitchen from './template/kitchen.hbs';
import embedded from './template/embedded.hbs';
import household from './template/household.hbs';
import home from './template/dom.hbs';
import getCategories from '../services/index.js';


// import categories from './data.js'

//сделать localStoredje
// const group = document.querySelector('.group');

const cartClear = refs.category;
const catygoryDom = document.querySelector('.catygory-dom');

cartClear.addEventListener('click', (e) => {
  e.preventDefault()
  // const res = cartClear.childNodes[1].firstElementChild.children[1].textContent
  if (e.target.name === 'household' || e.target.id === 'household') {//Крупная бытовая техника
    cartClear.innerHTML = ''
    renderHouse()
  }
  if (e.target.name === 'embedded' || e.target.id === 'embedded') {//Встраиваемая техника
    cartClear.innerHTML = ''
    renderEmbedded()
  }
  if (e.target.name === 'home' || e.target.id === 'home') {//Уход за домом и одеждой
    cartClear.innerHTML = ''
    renderHome()
    for (let i = 0; i < 6; i++) {
      catygoryDom.setAttribute('data-id', i);
    }
  }
  if (e.target.name === 'kitchen' || e.target.id === 'kitchen') {//Техника для кухни
    cartClear.innerHTML = ''
    renderKitchen()
  }
})
function renderHouse() {
  getCategories.getCategories()
    .then(data => house(data))
}
function renderEmbedded() {
  getCategories.getCategories()
    .then(data => embed(data))
}
function renderHome() {
  getCategories.getCategories()
    .then(data => hom(data))
}
function renderKitchen() {
  getCategories.getCategories()
    .then(data => kitche(data))
}



function house(data) {
  const item = household(data.slice(0, 6));
  refs.category.insertAdjacentHTML('beforeend', item);
}
function embed(data) {
  const item = embedded(data.slice(6, 11));
  refs.category.insertAdjacentHTML('beforeend', item);
}
function hom(data) {
  const item = home(data.slice(11, 17));
  refs.category.insertAdjacentHTML('beforeend', item);
}
function kitche(data) {
  const item = kitchen(data.slice(18));
  refs.category.insertAdjacentHTML('beforeend', item);
}