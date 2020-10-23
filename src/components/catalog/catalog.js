import css from './styles.css';

import store from '../../components/store';
const categories = store.categories;
// console.log(categories);

import {createSale} from "../createCards/index.js"
import templateList from './template.hbs';
import refs from './refs.js';

// refs.catalog.insertAdjacentHTML(
//    'beforeend',
//    createCatalogList(templateList, categories),
// );

// document.querySelector('[data-catalog="catalog"]').classList.add('isHidden');

// refs.catalogBtn.addEventListener('click', () => {
//   update(refs.catalog, refs.catBtnIcon);

//   const titleKbt = document.getElementById('kbtTitle');
//   const titleIt = document.getElementById('itTitle');
//   const titleHome = document.getElementById('homeTitle');
//   const titleKitchen = document.getElementById('inTitle');

//   const listKbt = document.getElementById('kbtList');
//   const listIt = document.getElementById('itList');
//   const listHome = document.getElementById('homeList');
//   const listKitchen = document.getElementById('inList');

//   const span1 = document.querySelector('#titleIcon1');
//   const span2 = document.querySelector('#titleIcon2');
//   const span3 = document.querySelector('#titleIcon3');
//   const span4 = document.querySelector('#titleIcon4');

// titleKbt.addEventListener('click', () => {
//   update(listKbt, span1);
// });

// titleIt.addEventListener('click', () => {
//   update(listIt, span2);
// });

// titleHome.addEventListener('click', () => {
//   update(listHome, span3);
// });

// titleKitchen.addEventListener('click', () => {
//   update(listKitchen, span4);
// });
// });

// refs.catalog.addEventListener('click', (e) => {
//   // console.dir(e.target);
//   // console.log(e.target.id);
//   if (e.target.classList.contains('catalog-list-item')) {
//     createSale(e.target.id);
//   }
// })

// function createCatalogList(template, data) {
//   const item = template(data);
//   return item
// }

// function update(list, el) {
//   if (el.textContent === '▼') {
//     el.textContent = '►';
//   } else {
//     el.textContent = '▼';
//   }
//   list.classList.toggle('isHidden');
// }

// export default createCatalogList()
import widthObject from '../helpers';

function showCatalog() {
  const catalog = document.querySelector('.catalog');
  const catalogBtn = document.querySelector('.js-catalog');
  const catBtnIcon = document.getElementById('catBtnIcon');

  catalog.insertAdjacentHTML(
    'beforeend',
    createCatalogList(templateList, categories),
  );

  document.querySelector('[data-catalog="catalog"]').classList.add('isHidden');

  catalogBtn.addEventListener('click', () => {
    update(catalog, catBtnIcon);
    // catalog.classList.toggle('isHidden');

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

  catalog.addEventListener('click', e => {
    console.dir(e.target);
    console.log(e.target.id);
    if (e.target.classList.contains('catalog-list-item')) {
      createSale('sale');
    }
  });

  function createCatalogList(template, data) {
    const item = template(data);
    return item;
  }

  function update(list, el) {
    if (el.textContent === '▼') {
      el.textContent = '►';
    } else {
      el.textContent = '▼';
    }
    list.classList.toggle('isHidden');
  }
}

export default showCatalog;
