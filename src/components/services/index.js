import { data } from 'autoprefixer';
import Axios from 'axios';
import store from '../store';
import { modalModule } from '../modalmodule/modal.js';
Axios.defaults.baseURL = 'https://back24.herokuapp.com/';
Axios.defaults.headers.common['Authorization'] = store.auth.accces_token;

export default {
  // Register new user
  async registerNewUser(userEmail, userPassword) {
    try {
      const response = await Axios.post('auth/registration', {
        email: userEmail,
        password: userPassword,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Login user
  async loginUser(userEmail, userPassword) {
    try {
      const response = await Axios.post('auth/login', {
        email: userEmail,
        password: userPassword,
      }).then(({ data }) => {
        localStorage.setItem('user_token', data.accces_token);
        store.auth.accces_token = data.accces_token;
        store.user = data.user;
      });
    } catch (error) {
      throw error;
    }
  },
  // Get all users
  async getAllUsers() {
    try {
      const response = await Axios.get('users');
      return response;
    } catch (error) {
      throw error;
    }
  },
  //    Change user email, name, surname, phone
  async changeUserInfo({ name = '', surname, email, phone }) {
    const axiosEmail = email ? email : store.user.email;
    const axiosName = name ? name : store.user.name;
    Axios.defaults.headers.common['Authorization'] = store.auth.accces_token;
    try {
      const response = await Axios.patch('users', {
        name: axiosName,
        surname: surname,
        email: axiosEmail,
        phone: phone,
      }).then(response => {
        store.user = response.data;
        return response;
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  //   Change user password
  async changePassword(body) {
    Axios.defaults.headers.common['Authorization'] = store.auth.accces_token;
    try {
      const response = await Axios.patch('users/changePassword', body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  //   Add favorite product
  async addFavoriteProduct(productId) {
    Axios.defaults.headers.common['Authorization'] = store.auth.accces_token;
    try {
      const response = await Axios.get(`users/addFavoriteProduct/${productId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  //   Remove favorite product
  async removeFavoriteProduct(productId) {
    Axios.defaults.headers.common['Authorization'] = store.auth.accces_token;
    try {
      const response = await Axios.delete(
        `users/removeFavoriteProduct/${productId}`,
      );
      return response;
    } catch (error) {
      throw error;
    }
  },

  //   Change user address
  async changeUserAddress(newAddress) {
    Axios.defaults.headers.common['Authorization'] = store.auth.accces_token;
    try {
      const response = await Axios.patch('users/updateAddress', {
        ...newAddress,
        zip: '01123',
      }).then(response => {
        store.user = response.data;
        return response;
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get current user
  async getCurrentUser() {
    Axios.defaults.headers.common['Authorization'] = store.auth.accces_token;
    try {
      const response = await Axios.get('users/currentUser').then(response => {
        store.user = response.data;
        return response;
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  //   Get all products
  async getAllProducts() {
    try {
      const response = await Axios.get('products').then(
        ({ data }) => (store.products = data),
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  // Create new product
  async createNewProduct(object) {
    Axios.defaults.headers.common['Authorization'] = store.auth.accces_token;

    const markupSuccess = function () {
      return `<div class='js-modal-info'><p>Товар успешно добавлен!</p></div>`;
    };
    const addListeners = function () {};

    try {
      const response = await Axios('products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(object),
      }).then(() => {
        modalModule(markupSuccess, addListeners);
      });

      return response;
    } catch (error) {
      const markupFail = function () {
        return `<div class='js-modal-info'><p>${error}</p></div>`;
      };
      modalModule(markupFail, addListeners);
      throw error;
    }
  },
  //   Get categories
  async getCategories() {
    try {
      const response = await Axios.get('products/getCategories').then(
        ({ data }) => (store.categories = data.categories),
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  //   Search products
  async searchProducts(search = '', category = '', itemsPerPage = 1, page = 1) {
    try {
      const url = `https://back24.herokuapp.com/products?itemsPerPage=${itemsPerPage}&page=${page}&search=${search}&category=${category}`;
      const response = await Axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
  //   Get all orders
  async getAllOrders() {
    Axios.defaults.headers.common['Authorization'] = store.auth.accces_token;
    try {
      const response = await Axios.get('orders').then(
        data => (store.orders = data),
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  // Create new order
  async createNewOrder(productList) {
    const userAddress = {
      country: store.user.address.country,
      city: store.user.address.city,
      place: store.user.address.place,
      street: store.user.address.street,
      block: store.user.address.block,
      building: store.user.address.building,
      flat: store.user.address.flat,
      zip: store.user.address.zip,
    };
    const order = {
      address: userAddress,
      productList: productList,
    };
    const markupSuccess = function () {
      return `<div class='js-modal-info'><p>Заказ оформлен!</p></div>`;
    };
    const addListeners = function () {};

    try {
      const response = await Axios({
        url: 'orders',
        method: 'POST',
        headers: {
          Authorization: store.auth.accces_token,
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(order),
      }).then(() => {
        modalModule(markupSuccess, addListeners);
      });
      return response;
    } catch (error) {
      const markupFail = function () {
        return `<div class='js-modal-info'><p>${error}</p></div>`;
      };
      modalModule(markupFail, addListeners);
      throw error;
    }
  },
};
