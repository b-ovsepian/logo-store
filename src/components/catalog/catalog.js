import css from './styles.css';

// import categories from './data.js'
import store from '../../components/store';
const categories = store.categories;
console.log(categories);

import templateList from './template.hbs';
import refs from './refs.js';
// const catalog = document.querySelector(".catalog")



const titleKbt = document.getElementById('kbtTitle');
const titleIt = document.getElementById('itTitle');
const titleHome = document.getElementById('homeTitle');
const titleKitchen = document.getElementById('inTitle');

const listKbt = document.getElementById('kbtList');
const listIt = document.getElementById('itList');
const listHome = document.getElementById('homeList');
const listKitchen = document.getElementById('inList');

const span1 = document.querySelector('#titleIcon1');
const span2 = document.querySelector('#titleIcon2');
const span3 = document.querySelector('#titleIcon3');
const span4 = document.querySelector('#titleIcon4');
 refs.catalog.insertAdjacentHTML(
   'beforeend',
   createCatalogList(templateList, categories),
);

document.querySelector('[data-catalog="catalog"]').classList.add('isHidden');

refs.catalogBtn.addEventListener('click', () => {

  // // тут отрисовка списка категорий
  // if (refs.catBtnIcon.textContent === '►') {
  // //  refs.catalog.insertAdjacentHTML('beforeend', createCatalogList(templateList, categories));
  //   refs.catBtnIcon.textContent = '▼';
  // } else {
  //   refs.catBtnIcon.textContent = '►';
  // }
  // // update(refs.catalog, refs.catBtnIcon);
  //   refs.catalog.classList.toggle('isHidden');
  update(refs.catalog, refs.catBtnIcon);

const titleKbt = document.getElementById('kbtTitle');
const titleIt = document.getElementById('itTitle');
const titleHome = document.getElementById('homeTitle');
  const titleKitchen = document.getElementById('inTitle');
  const listKbt = document.getElementById('kbtList');
  const listIt = document.getElementById('itList');
  const listHome = document.getElementById('homeList');
  const listKitchen = document.getElementById('inList');

  const span1 = document.querySelector('#titleIcon1');
  const span2 = document.querySelector('#titleIcon2');
  const span3 = document.querySelector('#titleIcon3');
  const span4 = document.querySelector('#titleIcon4');

titleKbt.addEventListener('click', () => {
  update(listKbt, span1);
});

titleIt.addEventListener('click', () => {
  update(listIt, span2);
});

titleHome.addEventListener('click', () => {
  update(listHome, span3);
});

titleKitchen.addEventListener('click', () => {
  update(listKitchen, span4);
});
});

refs.catalog.addEventListener('click', (e) => {
  console.dir(e.target);
  console.log(e.target.id);
  if (e.target.classList.contains('catalog-list-item')) {
    // createSale(e.target.id);
    createSale('sale');
  }
})

function createCatalogList(template, data) {

  const item = template(data);
  return item
  // console.log(item);
  // element.insertAdjacentHTML('beforeend', item);
}
// createCatalogList(templateList, categories, refs.catalog);

function update(list, el) {
  if (el.textContent === '▼') {
    el.textContent = '►';
  } else {
    el.textContent = '▼';
  }
  list.classList.toggle('isHidden');

}

export default createCatalogList()
