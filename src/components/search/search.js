import './search_styles.css';
import '../services/index.js';
import refsSearch from './refsSearch.js';
import templateCardItem from '../carditem/templateCardItem.hbs';
import modalRefs from '../modalmodule/modalrefs.js';
import searchTemplate from '../../templates/searchTemplate.hbs';
import { modalModule } from '../modalmodule/modal.js';

//это кнопка из хедера должна быть.
// const modalBTN = document.querySelector('.modalbtn');
// modalBTN.addEventListener('click', product);

// function product() {
//   function createListeners(closebackdrop) {
//     const searchButtonClose = document.querySelector('.searchButton__close');
//     searchButtonClose.addEventListener('click', closebackdrop);
//   }
//   modalModule(searchTemplate, createListeners);
// }

// refs.searchButton.addEventListener('click', event => {
//   event.preventDefault();
//   const nameSearchProduct = refs.searchInput.value;
//   if (!nameSearchProduct) return;

//   searchProducts(nameSearchProduct).then((dataSearch = []) => {});
// });

// searchProducts("fridge");