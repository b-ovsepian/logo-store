import css from './header.css';
// import categories from '../../components/store';
// const data = categories.categories;
// console.log(data);
const refs = {
  logo: document.querySelector('.js-logo'),
  phoneTrigger: document.querySelector('.js-phone'),
  searchHeader: document.querySelector('.js-search'),
  searachModal: document.querySelector('#search-modal'),
  cart: document.querySelector('.js-cart'),
  burger: document.querySelector('.js-burger'),
  catalog: document.querySelector('.catalog'),
  catalogBtn: document.querySelector('.js-catalog'),
  catBtnIcon: document.getElementById('catBtnIcon'),
  sale: document.querySelector('.js-sale'),
  information: document.querySelector('.js-info'),
  account: document.querySelector('.js-profile'),
  likes: document.querySelector('.js-likes'),
};
refs.catalogBtn.addEventListener('click', () => {
  // тут отрисовка списка категорий
    // refs.catalog.classList.toggle('isHidden');
    if (catBtnIcon.textContent === '▼') {
        catBtnIcon.textContent = '►';
        refs.catalogBtn.insertAdjacentHTML('afterend', "");
    } else {
        refs.catalogBtn.insertAdjacentHTML('afterend', refs.catalog);
     catBtnIcon.textContent = '▼';
   }
});
// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();
