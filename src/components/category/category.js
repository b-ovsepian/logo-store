import css from './category.css';
import refs from '../../refs/index.js';
import kitchen from './template/kitchen.hbs';
import embedded from './template/embedded.hbs';
import household from './template/household.hbs';
import home from './template/dom.hbs';
import getCategories from '../services/index.js';
//сделать localStoredje
const group = document.querySelector('.group');
const p = document.createElement('p');
const a = document.createElement('a');

const url = 'https://goit-store.herokuapp.com/products/getCategories';
const cartClear = refs.category

cartClear.addEventListener('click', (e, i)=>{
  e.preventDefault()
const res = cartClear.childNodes[1].firstElementChild.children[1].textContent
  if(e.target.name === 'household'){//Крупная бытовая техника
    cartClear.innerHTML = ''
    renderHouse()

    p.textContent = ' > ';
    a.textContent = res;
    a.href = '#';
    p.classList.add('carp')
    a.classList.add('carp')
    group.append(p,a);
    group.style.dis
  }
  if(e.target.name === 'embedded'){//Встраиваемая техника
    cartClear.innerHTML = ''
    renderEmbedded()

    p.textContent = ' > ';
    a.textContent = 'Встраиваемая техника';
    a.href = '#';
    p.classList.add('carp')
    a.classList.add('carp')
    group.append(p,a);
  }
  if(e.target.name === 'home'){//Уход за домом и одеждой
    cartClear.innerHTML = ''
    renderHome()

    p.textContent = ' > ';
    a.textContent = 'Уход за домом и одеждой';
    a.href = '#';
    p.classList.add('carp')
    a.classList.add('carp')
    group.append(p,a);
  }
  if(e.target.name === 'kitchen'){//Техника для кухни
    cartClear.innerHTML = ''
    renderKitchen()

    p.textContent = ' > ';
    a.textContent = 'Техника для кухни';
    a.href = '#';
    p.classList.add('carp')
    a.classList.add('carp')
    group.append(p,a);
  }
})
function renderHouse(){
  getCategories.getCategories()
  .then(data => house(data.categories))
}
function renderEmbedded(){
  getCategories.getCategories()
  .then(data => embed(data.categories))
}
function renderHome(){
  getCategories.getCategories()
  .then(data => hom(data.categories))
}
function renderKitchen(){
  getCategories.getCategories()
  .then(data => kitche(data.categories))
}
function house(data) {
  const item = household(data.slice(0, 6));
  refs.category.insertAdjacentHTML('beforeend', item);
}
function embed(data) {
  const item =  embedded(data.slice(6, 11));
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