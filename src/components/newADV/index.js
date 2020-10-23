import style from '../newADV/style.css';
import refs from '../../refs/index.js';
import { data } from 'autoprefixer';
import profileAdminAdTemplate from '../../templates/profile-admin-ad-template.hbs';
import getObj from '../services/index.js';
import services from '../services/index.js';

export default profileSectionsDetails => {
  profileSectionsDetails.insertAdjacentHTML(
    'beforeend',
    profileAdminAdTemplate(),
  );

  const fileForm = document.querySelector('.adminFormProduct');

  let productMass = {
    name: '',
    images: [],
    description: '',
    category: '',
    price: '',
  };
  // telProduct: '',

  function toDataUrl(element) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(element.files[0]);
    });
  }

  function getMarkup(array) {
    const ref = document.querySelector('.innerImages');
    const markup = array.reduce((acc, item) => {
      acc += `<img src='${item}' class="createIMG" alt="image">`;
      return acc;
    }, '');
    if (array.length > 5) {
      let plus = document.querySelector('.imageUpload');
      plus.style = 'display:none';
    }
    ref.innerHTML = markup;
  }

  const createBase = async element => {
    productMass.images.push(await toDataUrl(element));
    getMarkup(productMass.images);
  };

  const handleChange = async e => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'images') {
      createBase(e.target);
    } else productMass[name] = value;
  };

  fileForm.addEventListener('input', e => {
    handleChange(e);
  });
  fileForm.addEventListener('submit', e => {
    e.preventDefault();
    services.createNewProduct(productMass);
  });

  // создаю импут для выбора категорий
  const productsArr = [
    { value: 'Выберете категорию', name: 'Выберете категорию' },
    { value: 'refrigerators', name: 'Холодильники' },
    { value: 'washing_machines', name: 'Стиральные машины' },
    { value: 'dishwashers', name: 'Посудомоечные машины' },
    { value: 'сookers', name: 'Кухонные плиты' },
    { value: 'freezers', name: 'Морозильные камеры' },
    { value: 'drying_machines', name: 'Сушильные машины' },
    { value: 'built_in_ovens', name: 'Встраиваемые духовые шкафы' },
    { value: 'built_in_hobs', name: 'Встраиваемые варочные поверхности' },
    { value: 'cooker_hoods', name: 'Кухонные вытяжки' },
    { value: 'food_waste_disposers', name: 'Измельчители пищевых отходов' },
    { value: 'Accessories_for_vbt', name: 'Аксессуары к вбт' },
    { value: 'coffee_machines', name: 'Кофемашины' },
    { value: 'multicooker', name: 'Мультиварки' },
    { value: 'microwave_ovens', name: 'Печи СВЧ' },
    { value: 'blenders', name: 'Блендеры' },
    { value: 'grills', name: 'Грили' },
    {
      value: 'accessories_for_kitchen_appliances',
      name: 'Аксессуары для кухонной техники',
    },
    { value: 'other_small_equipment', name: 'Прочая мелкая техника' },
    { value: 'vacuum_cleaners', name: 'Пылесосы' },
    { value: 'robot_vacuum_cleaners', name: 'Роботы-пылесосы' },
    { value: 'irons', name: 'Утюги' },
    {
      value: 'sewing_equipment_and_accessories',
      name: 'Швейная техника и аксессуары',
    },
    { value: 'steam_cleaners', name: 'Пароочистители' },
    {
      value: 'accessories_for_home_care_and_clothing_products',
      name: 'Аксессуары к товарам по уходу за домом и одеждой',
    },
    { value: 'sale', name: 'Распродажа' },
    { value: 'new', name: 'Новые поступления' },
  ];

  const productSelect = document.querySelector('[name="category"]');

  const createSelect = (array, place) => {
    const markup = array.reduce((acc, { name, value }) => {
      acc += `<option value=${value}'${
        array[0].value === value ? 'selected' : ''
      }>${name}</option>`;
      return acc;
    }, '');
    place.innerHTML = markup;
  };

  createSelect(productsArr, productSelect);

  // getObj.createNewProduct(productMass)
};
