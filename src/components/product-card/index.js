import css from './style.css';
import template from '../../templates/product-card-templates.hbs';
import refs from '../../refs';
import searchProducts from '../services/index.js';
import { commonRender } from '../cart/index.js';
import services from '../services/index.js';
import store from '../store/index.js';
import renderMainPage from '../mainPage';
import { modalModule } from '../modalmodule/modal.js';

let main = refs.mainContainer;

let bigPhoto; //= document.querySelector('.product-card-slider-big-photo')
let sliderList; //= document.querySelector('.product-card-slider-list')
let productCart; //= document.querySelector('.product-card')
let buyButton; //= document.querySelector('.product-card-button-buy')
let checkButton; // console.log(productCart);
let exit;

export default {
  renderImages(data) {
    main.innerHTML = '';
    const items = template(data);
    main.insertAdjacentHTML('beforeend', items);

    window.scroll({
      top: 60,
      left: 0,
      behavior: 'smooth',
    });
    // productCart.style.paddingtop = '100px'

    const localSeen = JSON.parse(localStorage.getItem('lastSeen'));
    const productId = data[0]._id;

    if (localSeen) {
      const lastSeenArr = [...localSeen];
      const existingProduct = lastSeenArr.find(item => productId === item._id);
      if (!existingProduct) {
        lastSeenArr.unshift(data[0]);
      }
      localStorage.setItem('lastSeen', JSON.stringify(lastSeenArr));
    } else localStorage.setItem('lastSeen', JSON.stringify(data[0]));

    productCart = document.querySelector('.product-card');
    productCart.style.paddingTop = '30px';
    productCart.style.paddingBottom = '60px';
    bigPhoto = document.querySelector('.product-card-slider-big-photo');
    sliderList = document.querySelector('.product-card-slider-list');
    buyButton = document.querySelector('.product-card-button-buy');
    checkButton = document.querySelector('.product-card-button-bookmarks');
    exit = document.querySelector('.btn-exit');

    this.createModalImg(data);
  },

  createModalImg(img) {
    img.forEach(el => {
      for (const imageItem of el.images) {
        let li = document.createElement('li');
        li.setAttribute('class', 'product-card-slider-item');
        let img = document.createElement('img');
        img.setAttribute('class', 'product-card-slider-smallImg');
        img.src = imageItem;
        li.append(img);
        sliderList.append(li);
      }
    });
    sliderList.addEventListener('click', e => {
      bigImage.src = e.target.src;
    });

    setTimeout(() => {
      store.user.favorites.forEach(_id => {
        const heard = document.querySelector(
          `.product-card-button-bookmarks[data-id = "${_id}"]`,
        );
        if (heard) {
          heard.classList.add('product-card-button-bookmarks-full');
        }
      });
    }, 1000);

    checkButton.addEventListener('click', e => {
      if (e.target.classList.contains('product-card-button-bookmarks')) {
        e.target.classList.toggle('product-card-button-bookmarks-full');
        return services.addFavoriteProduct(e.target.dataset.id);
      }

      if (e.target.classList.contains('product-card-button-bookmarks-full')) {
        e.target.classList.toggle('product-card-button-bookmarks');
        return services.removeFavoriteProduct(e.target.dataset.id);
      }
    });

    let bigImage = document.createElement('img');
    bigImage.setAttribute('class', 'product-cart-main-img');
    bigImage.style.display = 'flex';

    bigImage.src = img[0].images[0];
    bigPhoto.append(bigImage);

    exit.addEventListener('click', event => {
      event.preventDefault();
      renderMainPage();
    });
    buyButton.addEventListener('click', event => {
      event.preventDefault();
      addProductToCart(img);

      const markup = function () {
        return `<div class='js-modal-info'><p>Товар добавлен в корзину!</p></div>`;
      };
      const addListeners = function () {};
      modalModule(markup, addListeners);
    });
  },
};

function addProductToCart(data) {
  const localCart = JSON.parse(localStorage.getItem('cart'));

  if (localCart) {
    const cartArr = [...localCart];
    cartArr.unshift(data[0]);
    localStorage.setItem('cart', JSON.stringify(cartArr));
  } else localStorage.setItem('cart', JSON.stringify(data));
}
