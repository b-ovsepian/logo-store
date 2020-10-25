const kbt = [
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
];
const it = [
  {
    name: 'Встраиваемые духовые шкафы',
    products: [],
  },
  {
    name: 'Посудомоечные машины',
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
];
const home = [
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
];
const kitchen = [
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
];

export default [
  {
    name: 'Крупная бытовая техника',
    image: './components/image/big-tehn.jpg',
    titleId: 'kbtTitle',
    catList_id: 'kbtList',
    spanId: 'titleIcon1',
    items: kbt,
  },
  {
    name: 'Встраиваемая техника',
    image: './components/image/mont-tehn.jpg',
    titleId: 'itTitle',
    catList_id: 'itList',
    spanId: 'titleIcon2',
    items: it,
  },
  {
    name: 'Уход за домом и одеждой',
    image: './components/image/cleane-tehn.jpg',
    titleId: 'homeTitle',
    catList_id: 'homeList',
    spanId: 'titleIcon3',
    items: home,
  },
  {
    name: 'Техника для кухний',
    image: './components/image/kitchen-tehn.jpg',
    titleId: 'inTitle',
    catList_id: 'inList',
    spanId: 'titleIcon4',
    items: kitchen,
  },
];
