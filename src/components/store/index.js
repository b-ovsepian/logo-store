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
      zip: '',
    },
  },
  auth: {
    accces_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODliMjAzYmE1OTE4MDAxN2JlNjMxNCIsImlhdCI6MTYwMzI4MTc2OSwiZXhwIjoxNjAzMzY4MTY5fQ.4Ew_aC1oXlme6Rd6XK5yXQL4zC9tEdaGSz8BfjUTfhY',
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
  categories: [],
};
