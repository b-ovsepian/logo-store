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
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODk3MTA4OGZmMTNiMDAxNzkyY2Y0NCIsImlhdCI6MTYwMzEyMTc0MCwiZXhwIjoxNjAzMjA4MTQwfQ.rJwGJoxd0ElGHcEKjixjPiX9oIPiFNROl7lS4YaePUU',
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
