import css from './styles.css';

import store from '../../components/store';
const categories = store.localCategories;

import { createSale } from '../createCards/index.js';
import templateList from './template.hbs';
import { refs } from '../modalmodule/modalrefs.js';

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
    if (e.target.classList.contains('catalog-list-item')) {
      createSale(e.target.dataset.category);
      setTimeout(() => {
        refs.lightbox.classList.remove('is-open');
        refs.body.style.overflow = 'visible';
        refs.backdrop.style.overflow = 'visible';
      }, 500);
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
