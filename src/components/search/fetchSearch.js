export const searchProducts = (query = '') => {
  return fetch(
    `https://goit-store.herokuapp.com/products?search=${query}&category=${query}`,
  ).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      alert('Sorry, not found');
    }
  });
};