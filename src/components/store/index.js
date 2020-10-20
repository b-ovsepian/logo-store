export default {
  user: [
    {
      favorites: [],
      lastSeen: [],
      role: '',
      _id: '',
      name: '',
      surname: '',
      email: '',
      password: '',
      phone: '',
      role: '',
      address: {
        _id: '',
        country: '',
        city: '',
        place: '',
        street: '',
        block: '',
        building: '',
        flat: '',
        zip: '',
      },
    },
  ],
  auth: {
    accces_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGU4YzcwMmI3Y2M5MDAxNzA1ZTg1MCIsImlhdCI6MTYwMzE4MDIwNiwiZXhwIjoxNjAzMjY2NjA2fQ.LUmasPbJCYwvbCyban77zoJC4Qkr-ynCwRbxUM8cQQg',
  },
  products: [
    {
      images: [],
      totalQuantity: '',
      _id: '',
      name: '',
      category: '',
      price: '',
      description: '',
    },
  ],
  orders: [
    {
      _id: '',
      products: [
        {
          _id: '',
          images: [],
          totalQuantity: '',
          name: '',
          category: '',
          price: '',
          description: '',
        },
      ],
    },
  ],
};
