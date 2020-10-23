import images from '../image';

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
    // role: '',
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
  categories: [
    {
      name: 'Крупная бытовая техника',
      image: images.catalogImages.img1,
      titleId: 'kbtTitle',
      catList_id: 'kbtList',
      spanId: 'titleIcon1',
      items: [
        {
          name: 'Холодильники',
          products: [],
        },
        {
          name: 'Посудомоечные машины',
          products: [],
        },
        {
          name: 'Кухонные плиты',
          products: [],
        },
        {
          name: 'Морозильные камеры',
          products: [],
        },
        {
          name: 'Стиральные машины',
          products: [],
        },
        {
          name: 'Сушильные машины',
          products: [],
        },
      ],
    },
    {
      name: 'Встраиваемая техника',
      image: images.catalogImages.img2,
      titleId: 'itTitle',
      catList_id: 'itList',
      spanId: 'titleIcon2',
      items: [
        {
          name: 'Встраиваемые духовые шкафы',
          products: [],
        },
        {
          name: 'посудомоечные машины',
          products: [],
        },
        {
          name: 'Встраиваемые варочные поверхности',
          products: [],
        },
        {
          name: 'Кухонные вытяжки',
          products: [],
        },
        {
          name: 'Измельчители пищевых отходов',
          products: [],
        },
        {
          name: 'Аксессуары к вбт',
          products: [],
        },
      ],
    },
    {
      name: 'Уход за домом и одеждой',
      image: images.catalogImages.img3,
      titleId: 'homeTitle',
      catList_id: 'homeList',
      spanId: 'titleIcon3',
      items: [
        {
          name: 'Кофемашины',
          products: [],
        },
        {
          name: 'Мультиварки',
          products: [],
        },
        {
          name: 'Печи СВЧ',
          products: [],
        },
        {
          name: 'Блендеры',
          products: [],
        },
        {
          name: 'Грили',
          products: [],
        },
        {
          name: 'Аксессуары для кухонной техники',
          products: [],
        },
        {
          name: 'Прочая мелкая техника',
          products: [],
        },
      ],
    },
    {
      name: 'Техника для кухний',
      image: images.catalogImages.img4,
      titleId: 'inTitle',
      catList_id: 'inList',
      spanId: 'titleIcon4',
      items: [
        {
          name: 'Пылесосы',
          products: [],
        },
        {
          name: 'Роботы-пылесосы',
          products: [],
        },
        {
          name: 'Утюги',
          products: [],
        },
        {
          name: 'Швейная техника и аксессуары',
          products: [],
        },
        {
          name: 'Пароочистители',
          products: [],
        },
        {
          name: 'Аксессуары к товарам по уходу за домом и одеждой',
          products: [],
        },
      ],
    },
  ],
};
