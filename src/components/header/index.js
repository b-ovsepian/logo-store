import css from './header.css';
import refs from './refs';
import images from './images';
import { modalModule } from '../modalmodule/modal.js';
import widthObject from '../helpers';
import renderInformation from '../information';

function createModalMarkup(){
//   const a = `
// <div class="header-modal">
//           <div class="container">
//             <div class="input">
//               <svg class="nav-icon" width="20" height="20">
//                 <use href="${images.headerImages.iconSearch}"></use>
//               </svg>
//               <input class="search-modal"
//                type="text" id="search-modal"
//                name="search-modal" placeholder="Поиск">
//             </div>

//             <ul class="list modal-list">
//               <li class="modal-list-item">
//                 <button class="modal-inner-button js-catalog">Каталог
//                   <span class="arrow" id="catBtnIcon">►</span>
//                 </button>
//                 <ul class="catalog isHidden" data-catalog="catalog">
//                 </ul>
//               </li>
//               <li class="modal-list-item js-sale">
//                 <a href="#">SALE &#37;</a>
//               </li>
//               <li class="modal-list-item">
//                 <button class="modal-inner-button js-info">
//                   <span>Информация</span>
//                   <span class="arrow">►</span>
//                 </button>
//               </li>
//               <li class="modal-list-item">
//                 <a href="#">Контакты</a>
//               </li>
//               <li class="numbers-button modal-list-item">
//                 <button class="modal-inner-button js-phone">
//                   <svg class="" width="30" height="30">
//                     <use href="${images.headerImages.iconPhone}"></use>
//                   </svg>
//                   <span class="with-icons">+38 (050) 333-37-96</span>
//                   <span class="arrow">►</span>
//                 </button>
//               </li>
//               <li class="modal-list-item">
//                 <button class="modal-inner-button js-profile">
//                   <svg class="" width="30" height="30">
//                     <use href="${images.headerImages.iconProfile}"></use>
//                   </svg>
//                   <span class="with-icons">Личный кабинет</span>
//                   <span class="arrow">►</span>
//                 </button>
//               </li>
//               <li class="modal-list-item">
//                 <a href="#" class="likes-link js-likes">
//                   <svg class="" width="30" height="30">
//                     <use href="${images.headerImages.iconLikes}"></use>
//                   </svg>
//                   <div class="likes-amount amount">0</div>
//                   <span class="with-icons">Избранное</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>`;
  const modalMarkup = `<div class="header-modal">
          <div class="container">
            <div class="input">
              <span class="search-icon"></span>
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
                  <span class="phone-icon"></span>
                  <span class="with-icons">+38 (050) 333-37-96</span>
                  <span class="arrow">►</span>
                </button>
              </li>
              <li class="modal-list-item">
                <button class="modal-inner-button js-profile">
                  <span class="profile-icon"></span>
                  <span class="with-icons">Личный кабинет</span>
                  <span class="arrow">►</span>
                </button>
              </li>
              <li class="modal-list-item">
                <a href="#" class="likes-link js-likes">
                  <span class="likes-icon">
                  <div class="likes-amount amount">0</div>
                  </span>
                  <span class="with-icons">Избранное</span>
                </a>
              </li>
            </ul>
          </div>
        </div>`;
  return modalMarkup;
}

refs.modalBtn.addEventListener('click', openModal);
function openModal() {
  function addListeners(closeBackdrop) {
    // document.querySelector().addEventListener('click', closeBackdrop);
  }
  modalModule(createModalMarkup, addListeners);
  renderInformation();
}

if (widthObject.isDesktop) {
  refs.headerWrap.innerHTML = `<a href="#" class="logo js-logo"><img src="${images.headerImages.logo}" alt="logo" width="40" height="40"><p>Lo<span>go</span></p></a>
  <ul class="list desktop-list">
        <li class="a">
          <button class="desktop-button js-phone">
                  <span class="phone-icon"></span>
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
          <a href="#">Sale &#37;</a>
        </li>
        <li class="a">
          <button class="desktop-button js-info">
                  <span>Информация</span>
                  <span class="arrow">▼</span>
                </button>
        </li>
        <li class="a">
          <a href="#">Контакты</a>
        </li>
        <li class="a">
          <button class="js-search">
            <span class="search-icon"></span>
          </button>
        </li>
        <li class="a">
          <button class="js-profile">
            <span class="profile-icon"></span>
          </button>
        </li>
        <li class="a">
          <a href="#" class="likes-link js-likes">
              <span class="likes-icon">
              <div class="likes-amount amount">0</div>
              </span>
          </a>
        </li>
        <li class="a">
          <a href="#" class="js-cart">
              <span class="cart-icon">
              <div class="items-amount amount">0</div>
              </span>
          </a>
        </li>
      </ul>`;
}