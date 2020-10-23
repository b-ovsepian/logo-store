import css from './header.css';
import refs from './refs';
import images from './images';
import { modalModule } from '../modalmodule/modal.js';
import widthObject from '../helpers';
import renderInformation from '../information';
import createCatalogList from '../catalog/catalog.js';
import searchButtonHandler from '../search/search.js';
import renderAuthMenu from '../AuthMenu';

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
                <a href="#" class="modal-list-link">Контакты</a>
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

refs.searchHeader.addEventListener('click', searchButtonHandler);

refs.modalBtn.addEventListener('click', openModal);
function openModal() {
  // refs.modalHeader.classList.add('change-modal');
  function addListeners(closeBackdrop) {
    document
      .querySelector('.header-modal-close-btn')
      .addEventListener('click', () => {
        closeBackdrop;
        // refs.modalHeader.classList.remove('change-modal');
      });
  }
  modalModule(createModalMarkup, addListeners);
  renderInformation();
  createCatalogList();
  // const catalogIgor = document.querySelector('[data-catalog="catalog"]');
  // catalogIgor.append(createCatalogList.createCatalogList());
  // createCatalogList.createCatalogList();
}

if (widthObject.isDesktop) {
  console.dir(refs.headerWrap.childNodes);
  console.dir(refs.mobileNav);
  console.dir(refs.burgerBtn);
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
          <a href="#" class="desktop-link">Sale &#37;</a>
        </li>
        <li class="a">
          <button class="desktop-button js-info">
                  <span>Информация</span>
                  <span class="arrow">▼</span>
                </button>
        </li>
        <li class="a">
          <a href="#" class="desktop-link">Контакты</a>
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
  // refs.headerWrap.innerHTML = `<a href="#" class="logo js-logo"><img src="${images.headerImages.logo}" alt="logo" width="40" height="40"><p>Lo<span>go</span></p></a>
  // <ul class="list desktop-nav-list">
  //       <li class="a">
  //         <button class="desktop-button js-phone">
  //                 <span class="phone-icon header-icon"></span>
  //                 <span class="with-icons">+38 (050) 333-37-96</span>
  //                 <span class="arrow">▼</span>
  //         </button>
  //       </li>
  //       <li class="a">
  //         <button class="desktop-button js-catalog">Каталог
  //             <span class="arrow" id="catBtnIcon">▼</span>
  //         </button>
  //       </li>
  //       <li class="a">
  //         <a href="#" class="desktop-link">Sale &#37;</a>
  //       </li>
  //       <li class="a">
  //         <button class="desktop-button js-info">
  //                 <span>Информация</span>
  //                 <span class="arrow">▼</span>
  //               </button>
  //       </li>
  //       <li class="a">
  //         <a href="#" class="desktop-link">Контакты</a>
  //       </li>
  //     </ul>
  //     <ul class="list account-list">
  //       <li class="a">
  //         <button class="js-search desktop-account-button">
  //           <span class="search-icon"></span>
  //         </button>
  //       </li>
  //       <li class="a">
  //         <button class="js-profile desktop-account-button">
  //           <span class="profile-icon"></span>
  //         </button>
  //       </li>
  //       <li class="a">
  //         <a href="#" class="likes-link js-likes">
  //             <span class="likes-icon">
  //             <div class="likes-amount amount">0</div>
  //             </span>
  //         </a>
  //       </li>
  //       <li class="a">
  //         <a href="#" class="js-cart">
  //             <span class="cart-icon">
  //             <div class="items-amount amount">0</div>
  //             </span>
  //         </a>
  //       </li>
  //     </ul>`;

  renderInformation();

  const catalogBtn = document.querySelector('.js-catalog');
  function createCatalogMarkup() {
    const catalogMarkup = `<ul class="catalog isHidden" data-catalog="catalog">`;
    return catalogMarkup;
  }
  catalogBtn.addEventListener('click', openCatalog);
  function openCatalog() {
    function addListeners(closeBackdrop) {}
    modalModule(createCatalogMarkup, addListeners);
    // renderInformation();
    createCatalogList();
  }

  document
    .querySelector('.js-search')
    .addEventListener('click', searchButtonHandler);

  document
    .querySelector('.js-profile')
    .addEventListener('click', renderAuthMenu);

  // createCatalogList();
  // createCatalogList();
}

/*
function userIgor() {
  function div() {
    return checkAuto();
  }

  modalModule(div, createListeners);
}

*/
