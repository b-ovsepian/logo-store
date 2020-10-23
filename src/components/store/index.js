import images from '../image';
import img from '../category/image';

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
          images: img.kbt.xol1,
          products: [],
        },
        {
          name: 'Посудомоечные машины',
          images: img.kbt.xol2,
          products: [],
        },
        {
          name: 'Кухонные плиты',
          images: img.kbt.xol3,
          products: [],
        },
        {
          name: 'Морозильные камеры',
          images: img.kbt.xol4,
          products: [],
        },
        {
          name: 'Стиральные машины',
          images: img.kbt.xol5,
          products: [],
        },
        {
          name: 'Сушильные машины',
          images: img.kbt.xol6,
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
          images: img.it.itImg1,
          products: [],
        },
        {
          name: 'посудомоечные машины',
          images: img.it.itImg2,
          products: [],
        },
        {
          name: 'Встраиваемые варочные поверхности',
          images: img.it.itImg3,
          products: [],
        },
        {
          name: 'Кухонные вытяжки',
          images: img.it.itImg4,
          products: [],
        },
        {
          name: 'Измельчители пищевых отходов',
          images: img.it.itImg5,
          products: [],
        },
        {
          name: 'Аксессуары к вбт',
          images: img.it.itImg6,
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
          images: img.home.homeImg1,
          products: [],
        },
        {
          name: 'Мультиварки',
          images: img.home.homeImg2,
          products: [],
        },
        {
          name: 'Печи СВЧ',
          images: img.home.homeImg3,
          products: [],
        },
        {
          name: 'Блендеры',
          images: img.home.homeImg4,
          products: [],
        },
        {
          name: 'Грили',
          images: img.home.homeImg5,
          products: [],
        },
        {
          name: 'Аксессуары для кухонной техники',
          images: img.home.homeImg6,
          products: [],
        },
        {
          name: 'Прочая мелкая техника',
          images: img.home.homeImg7,
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
          images: img.kitchen.kitchenImg1,
          products: [],
        },
        {
          name: 'Роботы-пылесосы',
          images: img.kitchen.kitchenImg2,
          products: [],
        },
        {
          name: 'Утюги',
          images: img.kitchen.kitchenImg3,
          products: [],
        },
        {
          name: 'Швейная техника и аксессуары',
          images: img.kitchen.kitchenImg4,
          products: [],
        },
        {
          name: 'Пароочистители',
          images: img.kitchen.kitchenImg5,
          products: [],
        },
        {
          name: 'Аксессуары к товарам по уходу за домом и одеждой',
          images: img.kitchen.kitchenImg6,
          products: [],
        },
      ],
    },
  ],
};
