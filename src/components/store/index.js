export default {
  user: {
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
    },
  },
  auth: {
    accces_token: '',
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
