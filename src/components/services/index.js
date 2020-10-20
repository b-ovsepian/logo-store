//
import store from '../store';
export default {
  // Register new user
  async registerNewUser(userEmail, userPassword) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      };
      const url = 'https://goit-store.herokuapp.com/auth/registration';
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      throw error;
    }
  },
  // Login user
  async loginUser(userEmail, userPassword) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      };
      const url = 'https://goit-store.herokuapp.com/auth/login';
      const response = await fetch(url, options);
      const data = response.json();
      await data.then(res => {
        store.auth.accces_token = res.accces_token;
        store.user = res.user;
      });
    } catch (error) {
      throw error;
    }
  },
  // Get all users
  async getAllUsers() {
    try {
      const options = {
        method: 'GET',
      };
      const url = 'https://goit-store.herokuapp.com/users';
      const response = await fetch(url, options);
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  //   Change user email or name
  async changeUserInfo({ name, surname, email, phone }) {
    console.log(`переменные ${name}, ${surname}, ${email}, ${phone} `);
    name ? '' : (name = store.user.name);
    email ? '' : (email = store.user.email);

    try {
      const options = {
        method: 'PATCH',
        headers: {
          Authorization: store.auth.accces_token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          phone: phone,
        }),
      };
      const url = `https://goit-store.herokuapp.com/users`;
      const response = await fetch(url, options);

      if (response.status >= 200 && response.status < 300) {
        const data = response.json();
        await data.then(res => {
          store.user = res;
        });
      }
      return response;
    } catch (error) {
      throw error;
    }
  },

  //   Change user email, name, surname, phone
  // async changeUserInfo(body) {
  //   try {
  //     const options = {
  //       method: 'PATCH',
  //       headers: {
  //         Authorization: store.auth.accces_token,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(body),
  //     };
  //     const url = `https://goit-store.herokuapp.com/users`;
  //     const response = await fetch(url, options);
  //     if (response.status >= 200 && response.status < 300) {
  //       const data = response.json();
  //       await data.then(res => {
  //         store.user = res;
  //       });
  //     }
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  //   Change user password
  async changePassword(body) {
    try {
      const options = {
        method: 'PATCH',
        headers: {
          Authorization: store.auth.accces_token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      };
      const url = `https://goit-store.herokuapp.com/users/changePassword`;
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  //   Add favorite product
  async addFavoriteProduct(productId) {
    try {
      const options = {
        method: 'GET',
        headers: {
          Authorization: store.auth.accces_token,
        },
      };
      const url = `https://goit-store.herokuapp.com/users/addFavoriteProduct/${productId}`;
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      throw error;
    }
  },
  //   Remove favorite product
  async removeFavoriteProduct(productId) {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          Authorization: store.auth.accces_token,
        },
      };
      const url = `https://goit-store.herokuapp.com/users/removeFavoriteProduct/${productId}`;
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      throw error;
    }
  },
  //   Change user address
  async changeUserAddress(newAddress) {
    try {
      const options = {
        method: 'PATCH',
        headers: {
          Authorization: store.auth.accces_token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newAddress, zip: '01123' }),
      };
      const url = `https://goit-store.herokuapp.com/users/updateAddress`;
      const response = await fetch(url, options);
      if (response.status >= 200 && response.status < 300) {
        const data = response.json();
        await data.then(res => (store.user = res));
      }

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const options = {
        method: 'GET',
        headers: {
          Authorization: store.auth.accces_token,
        },
      };
      const url = 'https://goit-store.herokuapp.com/users/currentUser';
      const response = await fetch(url, options);
      const data = response.json();
      await data.then(data => (store.user = data));
      if (response.status >= 200 && response.status < 300) {
        return data;
      }
      throw response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  //   Get all products
  async getAllProducts() {
    try {
      const options = {
        method: 'GET',
      };
      const url = `https://goit-store.herokuapp.com/products`;
      const response = await fetch(url, options);
      const data = response.json();
      await data.then(data => (store.products = data));
      return data;
    } catch (error) {
      throw error;
    }
  },
  // Create new product
  async createNewProduct(object) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      };
      const url = 'https://goit-store.herokuapp.com/products';
      const response = await fetch(url, options);
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  //   Get categories
  async getCategories() {
    try {
      const options = {
        method: 'GET',
      };
      const url = `https://goit-store.herokuapp.com/products/getCategories`;
      const response = await fetch(url, options);
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  //   Search products
  async searchProducts(search = '', category = '', itemsPerPage = 1, page = 1) {
    try {
      const options = {
        method: 'GET',
      };
      const url = `https://goit-store.herokuapp.com/products?itemsPerPage=${itemsPerPage}&page=${page}&search=${search}&category=${category}`;
      const response = await fetch(url, options);
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  //   Get all orders
  async getAllOrders() {
    try {
      const options = {
        method: 'GET',
        headers: {
          Authorization: store.auth.accces_token,
        },
      };
      const url = `https://goit-store.herokuapp.com/orders`;
      const response = await fetch(url, options);
      const data = response.json();
      await data.then(data => (store.orders = data));
      console.dir(store.orders);
      return data;
    } catch (error) {
      throw error;
    }
  },
  // Create new order
  async createNewOrder(productList) {
    const order = {
      address: store.user.address,
      productList: productList,
    };
    console.dir(order);
    try {
      const options = {
        method: 'POST',
        headers: {
          Authorization: store.auth.accces_token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      };
      console.log(JSON.stringify(order));
      const url = 'https://goit-store.herokuapp.com/orders';
      const response = await fetch(url, options);
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};
