import refs from '../../refs/index.js';
import mainContainerTemplate from '../../templates/profile-main-template.hbs';
import profileMainAdminTemplate from '../../templates/profile-main-admin-template.hbs';
import profileContactsTemplate from '../../templates/profile-contacts-template.hbs';
import profileChangepasswordTemplate from '../../templates/profile-changepassword-template.hbs';
import profileAddressTemplate from '../../templates/profile-address-template.hbs';
import services from '../services/index.js';
import { cardItem } from '../carditem/index.js';

// Функция, которая закрывает меню "Личный кабинет" по кнопке "Выход":
const closeProfile = () => {
  //вызываю функцию рендеринга главной страницы:
  //...
};

// Функция, которая проверяет есть ли класс активного меню, для подсвечивания активного пункта меню:
const changeActiveItem = element => {
  const activeItem = document.querySelector('.profile-menu__item_active');
  if (activeItem !== null) {
    activeItem.classList.remove('profile-menu__item_active');
  }

  element.classList.add('profile-menu__item_active');
};

// Функция, которая собирает значения с формы и создает объект для отправки на бек:
const buildRequestObject = event => {
  const formRef = event.target;
  const formData = new FormData(formRef);
  const submittedData = {};

  // Записываю в объект название и значение полей формы:
  formData.forEach((value, key) => {
    submittedData[key] = value;
  });
  console.log(submittedData);
  return submittedData;
};

// Функция, которая генерит сообщение нотификацию на форме меню личный кабинет:
const notificationMessage = (elem, message) => {
  let span = document.querySelector('.notification');
  if (span === null) {
    span = document.createElement('span');
    span.classList.add('notification');
    elem.before(span);
  }
  span.textContent = message;
};

/**
 * Функция может принимать три значения: "personalProfile", "favorites", "createAd",
 * в зависимости от того с какой кнопки осуществляется переход;
 */

const renderProfile = source => {
  // Отрисовываю меню:
  // Если пользователь админ:
  //if (storage.getItem('email') === '') {
  //refs.mainContainer.insertAdjacentHTML('beforeend', profileMainAdminTemplate());
  //}
  //else {
  //Если пользователь не админ:
  refs.mainContainer.insertAdjacentHTML('beforeend', mainContainerTemplate());
  //}

  // Нахожу кнопку "Выход":
  const exitLink = document.querySelector('.profile-exit__link');

  // Нахожу контейнер, в который буду отрисовывать пункты меню личный кабинет:
  const profileSectionsDetails = document.querySelector(
    '.profile-sections__details',
  );

  // Нахожу пункт меню "Контакты":
  const profileMenuItemContacts = document.querySelector(
    '.profile-menu__item_contacts',
  );

  // Нахожу пукт меню "Изменить пароль":
  const profileMenuItemChangePassword = document.querySelector(
    '.profile-menu__item_change-password',
  );

  // Нахожу пукт меню "Мой адрес":
  const profileMenuItemAddress = document.querySelector(
    '.profile-menu__item_address',
  );

  // Нахожу пукт меню "Избранное":
  const profileMenuItemFavorites = document.querySelector(
    '.profile-menu__item_favorites',
  );

  // Нахожу пукт меню "Создать объявление":
  const profileMenuItemCreateAd = document.querySelector(
    '.profile-menu__item_create-ad',
  );

  // Вешаю слушателя на кнопку "exitLink":

  exitLink.addEventListener('click', closeProfile);

  // Отрисовываю детали меню "Контакты":
  const renderContacts = async () => {
    profileMenuItemContacts.after(profileSectionsDetails);
    profileSectionsDetails.insertAdjacentHTML(
      'beforeend',
      profileContactsTemplate(),
    );

    changeActiveItem(profileMenuItemContacts);

    // Вызываю API (функция getCurrentUser) для заполнения деталей меню "Контакты":
    const result = await services.getCurrentUser();
    console.log(result);

    // Нахожу форму деталей меню "Контакты":
    const contactsForm = document.querySelector('.contacts-form');

    // Заполняю форму деталей меню "Контакты" значениями:
    contactsForm.elements.name.value = result.name;
    contactsForm.elements.surname.value = result.surname;
    contactsForm.elements.email.value = result.email;
    contactsForm.elements.phone.value = result.phone;

    // Вешаю слушателя на форму деталей меню "Контакты":
    contactsForm.addEventListener('submit', async event => {
      event.preventDefault();

      // Вызываю API (функция changeUserInfo) для изменения данных из меню "Контакты":
      try {
        const response = await services.changeUserInfo(
          buildRequestObject(event),
        );
        console.log(response);
        notificationMessage(contactsForm, 'Данные успешно сохранены!');
      } catch (error) {
        const errorMessage = error.response.data;
        notificationMessage(contactsForm, errorMessage);
      }
    });
  };

  // Вешаю слушателя на пункт меню "Контакты":
  profileMenuItemContacts.addEventListener('click', event => {
    event.preventDefault();
    profileSectionsDetails.innerHTML = '';

    // Вызываю функцию для вызова API (функция getCurrentUser) чтобы заполнить детали меню "Контакты":
    renderContacts();
  });

  const renderChangePassword = () => {
    // Отрисовываю детали меню "Изменить пароль":
    profileMenuItemChangePassword.after(profileSectionsDetails);
    profileSectionsDetails.insertAdjacentHTML(
      'beforeend',
      profileChangepasswordTemplate(),
    );

    changeActiveItem(profileMenuItemChangePassword);

    // Нахожу форму деталей меню "Изменить пароль":
    const changePasswordForm = document.querySelector('.changepassword-form');

    // Вешаю слушателя на форму деталей меню "Изменить пароль":
    changePasswordForm.addEventListener('submit', async event => {
      event.preventDefault();

      const newPassword = changePasswordForm.elements.password.value;
      const confirmPassword = changePasswordForm.elements.confirmPassword.value;

      if (newPassword === confirmPassword) {
        // Вызываю API (функция changePassword) для изменения данных из меню "Контакты":

        try {
          const response = await services.changePassword(
            buildRequestObject(event),
          );
          console.log(response);
          notificationMessage(changePasswordForm, 'Пароль успешно сохранен!');
        } catch (error) {
          const errorMessage = error.response.data;
          notificationMessage(changePasswordForm, errorMessage);
        }
      } else {
        notificationMessage(changePasswordForm, 'Пароли должны совпадать!');
      }
    });
  };

  // Вешаю слушателя на пункт меню "Изменить пароль":
  profileMenuItemChangePassword.addEventListener('click', event => {
    event.preventDefault();
    profileSectionsDetails.innerHTML = '';

    renderChangePassword();
  });

  // Отрисовываю детали меню "Мой адрес":
  const renderAddress = async () => {
    profileMenuItemAddress.after(profileSectionsDetails);
    profileSectionsDetails.insertAdjacentHTML(
      'beforeend',
      profileAddressTemplate(),
    );

    changeActiveItem(profileMenuItemAddress);

    // Вызываю API (функция getCurrentUser) для заполнения деталей меню "Мой адрес":
    const result = await services.getCurrentUser();
    console.log(result);

    // Нахожу форму деталей меню "Мой адрес":
    const addressForm = document.querySelector('.address-form');

    // Заполняю форму деталей меню "Мой адрес" значениями:
    addressForm.elements.name.value = result.name;
    addressForm.elements.surname.value = result.surname;
    addressForm.elements.country.value = result.address.country;

    addressForm.elements.place.value = result.address.place;
    addressForm.elements.city.value = result.address.city;
    addressForm.elements.street.value = `${result.address.street}, ${result.address.building}, ${result.address.flat}`;

    // Вешаю слушателя на форму деталей меню "Мой адрес":
    addressForm.addEventListener('submit', async event => {
      event.preventDefault();
      try {
        let { country, city, place, street } = buildRequestObject(event);

        const splitAddress = street.split(',');
        // console.log(splitAddress);
        // Вызываю API (функция changeUserAddress) для изменения данных из меню "Мой адрес":
        const response = await services.changeUserAddress({
          country,
          city,
          place,
          street: splitAddress[0],
          building: splitAddress[1],
          flat: splitAddress[2],
        });
        console.log(response);
        notificationMessage(addressForm, 'Адрес успешно сохранён!');
      } catch (error) {
        // debugger;
        const errorMessage = error.response.data;
        notificationMessage(addressForm, errorMessage);
      }
    });
  };

  // Вешаю слушателя на пункт меню "Мой адрес":
  profileMenuItemAddress.addEventListener('click', event => {
    event.preventDefault();
    profileSectionsDetails.innerHTML = '';

    // Вызываю функцию для вызова API (функция getCurrentUser) чтобы заполнить детали меню "Мой адрес":
    renderAddress();
  });

  // Отрисовываю детали меню "Избранное":
  const renderFavorites = async () => {
    profileMenuItemFavorites.after(profileSectionsDetails);
    profileSectionsDetails.insertAdjacentHTML(
      'beforeend',
      "<ul class='profile-favorites__list list card-list'></ul>",
    );

    changeActiveItem(profileMenuItemFavorites);

    // Вызываю API (функция getCurrentUser) для заполнения деталей меню "Избранное":
    const result = await services.getCurrentUser();
    console.log(result);

    const products = await services.getAllProducts();
    const favoriteProducts = products.filter(product =>
      result.favorites.includes(product._id),
    );
    console.log(products);
    // services.addFavoriteProduct(products[0]._id);

    //  Нахожу список деталей меню "Избранное":
    const profileFavoritesList = document.querySelector(
      '.profile-favorites__list',
    );

    cardItem(favoriteProducts, profileFavoritesList);

    if (profileFavoritesList.children.length > 0) {
      profileFavoritesList.insertAdjacentHTML(
        'afterend',
        '<button class="profile-btn button primary buy-all">КУПИТЬ ВСЁ</button>',
      );

      const buyAllBtn = document.querySelector('.buy-all');
      buyAllBtn.addEventListener('click', () => {
        // Вызвать функцию добавления товаров или ИД в корзину;
      });
    } else {
      notificationMessage(
        profileFavoritesList,
        'У Вас пока нет избранных товаров',
      );
    }
  };

  // Вешаю слушателя на пункт меню "Избранное":
  profileMenuItemFavorites.addEventListener('click', event => {
    event.preventDefault();
    profileSectionsDetails.innerHTML = '';

    // Вызываю функцию для вызова API (функция getCurrentUser) чтобы заполнить детали меню "Избранное":
    renderFavorites();
  });

  // Место для слушателя меню 'Создать объявление', кнопку нашла ранее: profileMenuItemCreateAd:

  if (source === 'personalProfile') {
    renderContacts();
  }
  if (source === 'favorites') {
    renderFavorites();
  }
  // if (source === 'createAd') {
  //   renderCreateAd();
  // }
};

renderProfile();
