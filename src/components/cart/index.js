import './styles.css';
import template from './templates/shopping-cart-template.hbs';
import store from '../store';
import services from '../services';
const cart = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};
export function renderArray() {
  setCartToStore();
  console.log(store.cart);
  cart.products = [
    ...store.cart.map(elem => ({
      id: elem._id,
      image: elem.images[0],
      price: elem.price,
      totalQuantity: elem.totalQuantity,
      totalSum: Number(elem.price) * Number(elem.totalQuantity),
    })),
  ];
  getTotalSum();
  return getMarkUp();
}
export function createListeners(close) {
  const cartList = document.querySelector('.cart-list');
  const result = document.querySelector('[data-result="result"]');
  const sum = document.querySelector('[data-result="sum"]');
  const backButton = document.querySelector('[data-button="backButton"]');
  const closeBtn = document.querySelector('.cart-close-btn');
  const orderButton = document.querySelector('[data-button="orderButton"]');
  backButton.addEventListener('click', () => {
    cart.products = [];
    store.cart = [...cart.products];
    close();
  });

  closeBtn.addEventListener('click', () => {
    cart.products = [];
    store.cart = [...cart.products];
    close();
  });

  orderButton.addEventListener('click', () => {
    const list = cart.products.map(product => product.id);
    services.createNewOrder(list).then(res => {
      localStorage.removeItem('cart');
      store.cart = [];
    });
    close();
  });
  cartList.addEventListener('click', event => {
    const id = event.target.closest('[data-id]').dataset.id;
    let items = '';
    switch (event.target.closest('[data-button]').dataset.button) {
      case 'delete-button':
        cart.products = [...cart.products.filter(product => product.id !== id)];
        console.log(cart);
        items = template(cart.products);
        getTotalSum();
        cartList.innerHTML = template(cart.products);
        result.textContent = cart.totalPrice;
        sum.textContent = cart.totalPrice;
        break;
      case 'decriment-button':
        cart.products = [
          ...cart.products.map(product =>
            product.id === id
              ? {
                  ...product,
                  totalQuantity:
                    Number(product.totalQuantity) - 1 !== 0
                      ? Number(product.totalQuantity) - 1
                      : 1,
                  totalSum:
                    Number(product.totalQuantity) - 1 !== 0
                      ? Number(product.price) *
                        Number(product.totalQuantity - 1)
                      : Number(product.price),
                }
              : product,
          ),
        ];
        getTotalSum();
        cartList.innerHTML = template(cart.products);
        sum.textContent = cart.totalPrice;
        result.textContent = cart.totalPrice;
        break;
      case 'increment-button':
        cart.products = [
          ...cart.products.map(product =>
            product.id === id
              ? {
                  ...product,
                  totalQuantity: Number(product.totalQuantity) + 1,
                  totalSum:
                    Number(product.price) * Number(product.totalQuantity + 1),
                }
              : product,
          ),
        ];
        getTotalSum();
        cartList.innerHTML = template(cart.products);
        sum.textContent = cart.totalPrice;
        result.textContent = cart.totalPrice;
        break;
      default:
        cartList.innerHTML = template(cart.products);
        sum.textContent = cart.totalPrice;
        result.textContent = cart.totalPrice;
        break;
    }
  });
}
function getTotalSum() {
  cart.totalPrice = cart.products.reduce((acc, product) => {
    acc += Number(product.totalQuantity) * Number(product.price);
    return acc;
  }, 0);
}
function getMarkUp() {
  return `
    <div class="cart-container">
      <div class="upper-wrapper">
        <h2>Корзина</h2>
        <svg
          class="cart-close-btn"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill="#53535C
          "
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    <ul class="cart-list">
${template(cart.products)}
    </ul>
      <p class="sum-text">Сумма <span class="sum" data-result="sum">${
        cart.totalPrice
      }</span>₴</p>
       <div class="result-wrapper">
         <p class="result-text">Итого
       <span class="result" data-result="result">${cart.totalPrice}</span>₴</p>
     </div>
      <div class="buttons">
        <button class="order-button button" data-button="orderButton">Оформить заказ</button>
        <button class="back-button button" data-button="backButton">
          <svg
            class="back-icon"
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 7C26.5523 7 27 7.44772 27 8C27 8.55228 26.5523 9 26 9V7ZM0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM26 9H1V7H26V9Z"
              fill="#6368E5"
            />
          </svg>
          к покупкам
        </button>
        </div>
  `;
}
export function setCartToStore() {
  console.dir(store);
  if (store.cart.length <= 0) {
    if (localStorage.getItem('cart')) {
      const localCart = JSON.parse(localStorage.getItem('cart'));
      store.cart = [...localCart];
    }
  }
}
