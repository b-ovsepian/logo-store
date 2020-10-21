import css from './header.css';
import refs from './refs';
import images from './images';
import template from './template.hbs';
import { modalModule } from '../modalmodule/modal.js';
import widthObject from '../helpers';
const iconSearch = images.headerImages.iconSearch;
console.log(iconSearch);
console.log(template(images));

const a = `
<div class="header-modal">
          <div class="container">
            <div class="input">
              <svg class="nav-icon" width="20" height="20">
                <use href="${images.headerImages.iconSearch}"></use>
              </svg>
              <input class="search-modal"
               type="text" id="search-modal"
               name="search-modal" placeholder="Поиск">
            </div>

            <ul class="list modal-list">
              <li class="modal-list-item">
                <button class="modal-inner-button js-catalog">Каталог
                  <span class="arrow" id="catBtnIcon">►</span>
                </button>
                <ul class="catalog isHidden" data-catalog="catalog">
                </ul>
              </li>
              <li class="modal-list-item js-sale">
                <a href="#">SALE &#37;</a>
              </li>
              <li class="modal-list-item">
                <button class="modal-inner-button js-info">
                  <span>Информация</span>
                  <span class="arrow">►</span>
                </button>
              </li>
              <li class="modal-list-item">
                <a href="#">Контакты</a>
              </li>
              <li class="numbers-button modal-list-item">
                <button class="modal-inner-button js-phone">
                  <svg class="" width="30" height="30">
                    <use href="${images.headerImages.iconPhone}"></use>
                  </svg>
                  <span class="with-icons">+38 (050) 333-37-96</span>
                  <span class="arrow">►</span>
                </button>
              </li>
              <li class="modal-list-item">
                <button class="modal-inner-button js-profile">
                  <svg class="" width="30" height="30">
                    <use href="${images.headerImages.iconProfile}"></use>
                  </svg>
                  <span class="with-icons">Личный кабинет</span>
                  <span class="arrow">►</span>
                </button>
              </li>
              <li class="modal-list-item">
                <a href="#" class="likes-link js-likes">
                  <svg class="" width="30" height="30">
                    <use href="${images.headerImages.iconLikes}"></use>
                  </svg>
                  <div class="likes-amount amount">0</div>
                  <span class="with-icons">Избранное</span>
                </a>
              </li>
            </ul>
          </div>
        </div>`;
// console.log(widthObject.viewport.function);
// const setViewport = widthObject.viewport.function;
// setViewport()

// const product= () => {
//   // modalModule(template, )
//   const createListeners = closeBackdrop => {
//     refs.openModal.classList.toggle('visually-hidden');
//     refs.closeModal.classList.toggle('visually-hidden');
//     closeBackdrop();
//     refs.modalBtn.addEventListener('click', closeBackdrop);
//   };
//   if (refs.openModal.classList.contains('visually-hidden')) {
//     refs.modalBtn.addEventListener('click', product);
//   }
//   modalModule(template, createListeners);
// };

// refs.modalBtn.addEventListener('click', method1);
// function method1() {
//   refs.openModal.classList.add('visually-hidden');
//   refs.closeModal.classList.toggle('visually-hidden');
//   function method2(closebackdrop) {
//     refs.modalBtn.addEventListener('click', closebackdrop)
//     refs.openModal.classList.toggle('visually-hidden');
//     refs.closeModal.classList.add('visually-hidden');
//   }
//   modalModule(template, method2)
// }

refs.modalBtn.addEventListener('click', openModal);
function openModal() {
  function addListeners(closeBackdrop) {
    // document.querySelector().addEventListener('click', closeBackdrop);
  }
  modalModule(a, addListeners);
}

// if (setViewport.isDesktop) {
//   refs.headerWrap.innerHTML = '<a href="#" class="logo js-logo"><img src="./components/header/images/logo.png" alt="logo" width="40" height="40"><p>Lo<span>go</span></p></a>';
// }
