import css from './style.css';
import template from '../../templates/product-card-templates.hbs';
import refs from '../../refs';
import searchProducts from '../services/index.js';
import { commonRender } from '../cart/index.js';
import services from '../services/index.js';
import store from '../store/index.js';
import renderMainPage from '../mainPage';

let main = refs.mainContainer;

let bigPhoto; //= document.querySelector('.product-card-slider-big-photo')
let sliderList; //= document.querySelector('.product-card-slider-list')
let productCart; //= document.querySelector('.product-card')
let buyButton; //= document.querySelector('.product-card-button-buy')
let checkButton; // console.log(productCart);
let exit;

// createModalImg(images);
// console.log(images);
// renderApi();

export default {
  renderImages(data) {
    console.log(data);
    main.innerHTML = '';
    const items = template(data);
    main.insertAdjacentHTML('beforeend', items);
    // productCart.style.paddingtop = '100px'

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
      console.log(el.category);
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

    setSessionStorage(img[0]);

    function setSessionStorage(arrey) {
      return localStorage.setItem('lastSeen', JSON.stringify(arrey));
    }

    buyButton.addEventListener('click', e => {
      console.log(img[0]);
    });

    exit.addEventListener('click', event => {
      event.preventDefault();
      renderMainPage();
    });
  },
};
