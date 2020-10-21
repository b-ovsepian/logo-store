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
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGZlMTM5YzFjMmJmMDAxNzcxOTY2MyIsImlhdCI6MTYwMzI2NDk0MywiZXhwIjoxNjAzMzUxMzQzfQ.PdoPKO7PVEXExDJmn31hlSYUYBret67v87JuSfPdSRM',
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
