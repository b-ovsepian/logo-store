const baseUrl = 'https://goit-store.herokuapp.com/users';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODk3MTA4OGZmMTNiMDAxNzkyY2Y0NCIsImlhdCI6MTYwMzAyNzQxMCwiZXhwIjoxNjAzMTEzODEwfQ.0rPpeVx-P0ok5oDuSzPXgaWP0gf5w3-6ADeuxSUwxLw';

export default {
  async getUserInfo() {
    try {
      const result = await fetch(`${baseUrl}/currentUser`, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      });
      if (result.status >= 200 && result.status < 300) {
        return await result.json();
      }
      throw result;
    } catch (error) {
      console.log(error);
    }
  },
  async changeUserInfo(body) {
    try {
      const result = await fetch(baseUrl, {
        method: 'PATCH',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (result.status >= 200 && result.status < 300) {
        return await result.json();
      }
      throw result;
    } catch (error) {
      console.log(error);
    }
  },
  async changeUserPassword(body) {
    try {
      const result = await fetch(`${baseUrl}/changePassword`, {
        method: 'PATCH',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (result.status >= 200 && result.status < 300) {
        return;
      }
      throw result;
    } catch (error) {
      console.log(error);
    }
  },

  async changeUserAddress(body) {
    try {
      const result = await fetch(`${baseUrl}/updateAddress`, {
        method: 'PATCH',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (result.status >= 200 && result.status < 300) {
        return await result.json();
      }
      throw result;
    } catch (error) {
      console.log(error);
    }
  },
};
