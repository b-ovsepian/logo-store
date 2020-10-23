import css from './category.css';
import refs from '../../refs/index.js';
import kitchen from './template/kitchen.hbs';
import embedded from './template/embedded.hbs';
import household from './template/household.hbs';
import home from './template/home.hbs';
// import images from './image';
import getCategories from '../services/index.js';
import { createSale } from '../createCards/index.js'; // дома проверить
import store from '../../components/store';
const categories = store.categories;
const cartClear = refs.category;
console.log(categories);
cartClear.addEventListener('click', (e) => {
  e.preventDefault()

  if (e.target.name === 'household' || e.target.id === 'household') {//Крупная бытовая техника
    cartClear.innerHTML = ''
    // renderHouse()
    house()
  }
  if (e.target.name === 'embedded' || e.target.id === 'embedded') {//Встраиваемая техника
    cartClear.innerHTML = ''
    embed()
  }
  if (e.target.name === 'home' || e.target.id === 'home') {//Уход за домом и одеждой
    cartClear.innerHTML = ''
    hom()

  }
  if (e.target.name === 'kitchen' || e.target.id === 'kitchen') {//Техника для кухни
    cartClear.innerHTML = ''
    kitche()
  }
})

// function renderHouse() {//Крупная бытовая техника
//   getCategories.getCategories()
//     .then(data => house(data))
// }
// function renderEmbedded() {//Встраиваемая техника
//   getCategories.getCategories()
//     .then(data => embed(data))
// }
// function renderHome() {//Уход за домом и одеждой
//   getCategories.getCategories()
//     .then(data => hom(data))
// }
// function renderKitchen() {//Техника для кухни
//   getCategories.getCategories()
//     .then(data => kitche(data))
// }
//=======================================================================================

function house() {//Крупная бытовая техника //kbt
  const item = household(categories[0].items);
  refs.category.insertAdjacentHTML('beforeend', item);

  document.getElementById('cart-list').addEventListener('click', (e) => {
    createSale(e.target.textContent)
  })
}
function embed() {//Встраиваемая техника //it
  const item = embedded(categories[1].items);
  refs.category.insertAdjacentHTML('beforeend', item);

  document.getElementById('cart-list').addEventListener('click', (e) => {
    createSale(e.target.textContent)
  })
}
function hom() {//Уход за домом и одеждой //home
  const item = home(categories[2].items);
  refs.category.insertAdjacentHTML('beforeend', item);

  document.getElementById('cart-list').addEventListener('click', (e) => {
    createSale(e.target.textContent)
  })
}
function kitche() {//Техника для кухни //kitchen
  const item = kitchen(categories[3].items);
  refs.category.insertAdjacentHTML('beforeend', item);

  document.getElementById('cart-list').addEventListener('click', (e) => {
    createSale(e.target.textContent)
  })
}
