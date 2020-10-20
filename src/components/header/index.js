import css from './header.css';
import refs from './refs';
// import categories from '../../components/store';
// const data = categories.categories;
// console.log(data);
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