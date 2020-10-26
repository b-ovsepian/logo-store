import css from './header.css';
import refs from './refs';
import images from './images';
import { modalModule } from '../modalmodule/modal.js';
import widthObject from '../helpers';
import renderInformation from '../information';
import createCatalogList from '../catalog/catalog.js';
import searchButtonHandler from '../search/search.js';
import renderAuthMenu from '../AuthMenu';
import renderDevelopers from '../developers';
import renderMainPage from '../mainPage';
import { createSale } from '../createCards';
import renderProfile from '../profile';
import { renderArray } from '../cart';
import { createListeners } from '../cart';
import { setCartToStore } from '../cart';
import { closeBackdrop } from '../helpers';
import store from '../store';

function createModalMarkup() {
  const modalMarkup = `<div class="header-modal">
            <div class="input">
              <span class="search-icon"></span>
              <input class="search-modal"
               type="text" id="search-modal"
               name="search-modal" placeholder="Поиск">
            </div>
            <button class="header-modal-close-btn">
              <span class="header-close-icon"></span>
            </button>
            <ul class="list modal-list">
              <li class="modal-list-item">
                <button class="modal-inner-button js-catalog">Каталог
                  <span class="arrow" id="catBtnIcon">►</span>
                </button>
                <ul class="catalog isHidden" data-catalog="catalog">
                </ul>
              </li>
              <li class="modal-list-item js-sale">
                <a href="#" class="modal-list-link">SALE &#37;</a>
              </li>
              <li class="modal-list-item">
                <button class="modal-inner-button js-info">
                  <span>Информация</span>
                  <span class="arrow">►</span>
                </button>
              </li>
              <li class="modal-list-item">
                <a href="#" class="modal-list-link js-developers">Контакты</a>
              </li>
              <li class="numbers-button modal-list-item">
                <button class="modal-inner-button js-phone">
                  <span class="phone-icon header-icon"></span>
                  <span class="with-icons">+38 (050) 333-37-96</span>
                  <span class="arrow">►</span>
                </button>
              </li>
              <li class="modal-list-item">
                <button class="modal-inner-button js-profile">
                  <span class="profile-icon header-icon"></span>
                  <span class="with-icons">Личный кабинет</span>
                  <span class="arrow">►</span>
                </button>
              </li>
              <li class="modal-list-item">
                <a href="#" class="likes-link modal-list-link js-likes">
                  <span class="likes-icon header-icon">
                  <div class="likes-amount amount">0</div>
                  </span>
                  <span class="with-icons">Избранное</span>
                </a>
              </li>
            </ul>
        </div>`;
  return modalMarkup;
}
document.querySelector('.js-logo').addEventListener('click', event => {
  event.preventDefault();
  renderMainPage();
});
document.querySelector('.js-cart').addEventListener('click', event => {
  event.preventDefault();
  setCartToStore();
  if (store.cart.length > 0) {
    modalModule(renderArray, createListeners);
  } else {
    const markup = function () {
      return `<div class='js-modal-info'><p>Корзина пустая</p></div>`;
    };
    const addListeners = function () {};
    modalModule(markup, addListeners);
  }
});
refs.searchHeader.addEventListener('click', searchButtonHandler);

refs.modalBtn.addEventListener('click', openModal);
function openModal() {
  // refs.modalHeader.classList.add('change-modal');
  function addListeners(closeBackdrop) {}
  modalModule(createModalMarkup, addListeners);
  renderInformation();
  createCatalogList();
  renderDevelopers();

  document.querySelector('.js-sale').addEventListener('click', event => {
    event.preventDefault();
    createSale('sale');
    closeBackdrop();
  });
  document
    .querySelector('.header-modal-close-btn')
    .addEventListener('click', event => {
      event.preventDefault();
      closeBackdrop();
    });
  document
    .querySelector('.js-profile')
    .addEventListener('click', renderAuthMenu);
  document.querySelector('.js-likes').addEventListener('click', event => {
    event.preventDefault();
    const local = localStorage.getItem('info');
    if (local) {
      refs.mainContainer.innerHTML = '';
      renderProfile('favorites');
    }
  });
}

if (widthObject.isDesktop) {
  refs.headerWrap.removeChild(refs.mobileNav);
  refs.headerWrap.removeChild(refs.burgerBtn);
  refs.headerWrap.insertAdjacentHTML(
    'beforeend',
    `<ul class="list desktop-nav-list">
        <li class="a">
          <button class="desktop-button js-phone">
                  <span class="phone-desktop-icon header-icon"></span>
                  <span class="with-icons">+38 (050) 333-37-96</span>
                  <span class="arrow">▼</span>
          </button>
        </li>
        <li class="a">
          <button class="desktop-button js-catalog">Каталог
              <span class="arrow" id="catBtnIcon">▼</span>
          </button>
        </li>
        <li class="a">
          <a href="#" class="desktop-link js-sale">Sale &#37;</a>
        </li>
        <li class="a">
          <button class="desktop-button js-info">
                  <span>Информация</span>
                  <span class="arrow">▼</span>
                </button>
        </li>
        <li class="a">
          <a href="#" class="desktop-link js-developers">Контакты</a>
        </li>
      </ul>
      <ul class="list account-list">
        <li class="a" style="align-self: center">
          <button class="js-search desktop-account-button">
            <span class="search-desktop-icon"></span>
          </button>
        </li>
        <li class="a">
          <button class="js-profile desktop-account-button">
            <span class="profile-desktop-icon"></span>
          </button>
        </li>
        <li class="a">
          <a href="#" class="likes-link js-likes">
              <span class="likes-desktop-icon">
              </span>
          </a>
        </li>
        <li class="a">
          <a href="#" class="js-cart">
              <span class="cart-icon">
              </span>
          </a>
        </li>
      </ul>`,
  );

  renderInformation();
  renderDevelopers();

  const catalogBtn = document.querySelector('.js-catalog');
  function createCatalogMarkup() {
    const catalogMarkup = `<ul class="catalog isHidden" data-catalog="catalog">`;
    return catalogMarkup;
  }
  catalogBtn.addEventListener('click', openCatalog);
  function openCatalog() {
    function addListeners(closeBackdrop) {}
    modalModule(createCatalogMarkup, addListeners);
    createCatalogList();
  }
  document
    .querySelector('.js-profile')
    .addEventListener('click', renderAuthMenu);
  document
    .querySelector('.js-search')
    .addEventListener('click', searchButtonHandler);

  document.querySelector('.js-sale').addEventListener('click', event => {
    event.preventDefault();
    createSale('sale');
  });
  document.querySelector('.js-cart').addEventListener('click', event => {
    event.preventDefault();
    setCartToStore();
    if (store.cart.length > 0) {
      modalModule(renderArray, createListeners);
    } else {
      const markup = function () {
        return `<div class='js-modal-info'><p>Корзина пустая</p></div>`;
      };
      const addListeners = function () {};
      modalModule(markup, addListeners);
    }
  });

  document.querySelector('.js-likes').addEventListener('click', event => {
    event.preventDefault();
    const local = localStorage.getItem('info');
    if (local) {
      refs.mainContainer.innerHTML = '';
      renderProfile('favorites');
    } else {
      const markup = function () {
        return `<div class='js-modal-info'><p>Авторизируйтесь на сайте</p></div>`;
      };
      const addListeners = function () {};
      modalModule(markup, addListeners);
    }
  });

  document.querySelector('.js-logo').addEventListener('click', event => {
    event.preventDefault();
    renderMainPage();
  });
}
