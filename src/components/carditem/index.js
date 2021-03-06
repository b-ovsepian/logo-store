import css from './style.css';
import refs from '../../refs/index.js';
import templateCardItem from './templateCardItem.hbs';
import services from '../services/index.js';
import store from '../store/index.js';
import productCard from '../product-card/index.js';

// ======================================================================================================================
// ====  +++  ==========  +++  ==========  +++  ==========  +++  ==========  +++  ==========  +++  ==========  +++  =====
// ====  +++  ==========  +++  ==========  +++  ==========  +++  ==========  +++  ==========  +++  ==========  +++  =====
// ==  +++++++  ======  +++++++  ======  +++++++  ======  +++++++  ======  +++++++  ======  +++++++  ======  +++++++  ===
// ===  +++++  ========  +++++  ========  +++++  ========  +++++  ========  +++++  ========  +++++  ========  +++++  ====
// ====  +++  ==========  +++  ==========  +++  ==========  +++  ==========  +++  ==========  +++  ==========  +++  =====
// =====  +  ============  +  ============  +  ============  +  ============  +  ============  +  ============  +  ======
// ======================================================================================================================
// при вызове функции:
// первым параметром нужно передать (data) - промисс полученый в .then
// вторым параметром нужно передать (where) - элемент в который нужно карточки
// третий НЕОБЯЗАТЕЛЬНЫЙ (sale) - передать true что бы отобразить цену до скидки
// export не дефолтный
export const cardItem = (data, where, sale = false) => {
  // const salePrice = sale ? data.map(item => ({ ...item, sale: item.price + 10 % })) : " ";
  const item = templateCardItem(data);
  // место куда нужно вставить where
  // where.innerHTML = item
  where.insertAdjacentHTML('beforeend', item);
  // проверка есть ли карточка в избранных
  // если есть то зарисовать сердечко
  setTimeout(() => {
    store.user.favorites.forEach(_id => {
      const span = document.querySelectorAll(
        `.icon-box-favorit[data-id="${_id}"]`,
      );
      span.forEach(item => {
        if (item !== null) {
          item.classList.add('icon-box-favorit-full');
        }
      });
    });
  }, 1000);
  //слушатель на иконку для смены иконки
  // и записи на бек в массив favorit
  where.addEventListener('click', e => {
    let id = e.target.dataset.id;
    const idItem = e.target.closest('[data-id]')
      ? e.target.closest('[data-id]').dataset.id
      : null;
    if (e.target.classList.contains('icon-box-favorit')) {
      e.target.classList.toggle('icon-box-favorit-full');
    }
    if (e.target.classList.contains('icon-box-favorit-full')) {
      // взяли id объекта
      let element = mapArray(data, id);
      return services.addFavoriteProduct(element._id);
    }
    if (
      !e.target.classList.contains('icon-box-favorit-full') &&
      e.target.nodeName === 'SPAN'
    ) {
      let element = mapArray(data, id);
      return services.removeFavoriteProduct(element._id);
    }
    if (e.target.nodeName !== 'SPAN') {
      const currentItem = data.filter(item => item._id === idItem);
      productCard.renderImages(currentItem);
    }
  });
};
// функция поиска выбранного элемента по сердечку
function mapArray(ar, id) {
  return ar.find(elem => elem._id === id);
}
