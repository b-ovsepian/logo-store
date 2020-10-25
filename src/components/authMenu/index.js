import './authMenu.css';
import store from '../store';
import refs from '../../refs';
import { modalModule } from '../modalmodule/modal';
import { openForm } from '../authform/authform.js';
import renderProfile from '../profile';
import { exitUser } from '../helpers';

function renderAuthMenu() {
  if (store.user.email === 'admin@gmail.com') {
    store.user.role = 'ADMIN';
  } else {
    store.user.role = 'USER';
  }

  if (store.user.email) {
    openAuthMenu();
  } else {
    openForm();
  }
  function openAuthMenu() {
    modalModule(markup, createListenersMenu);
  }

  function markup() {
    return `<div class="private-account">
            <ul class="user-list">
            <li><h2 class="user-heading">${
              store.user.name ? store.user.name : 'Username'
            }</h2></li>
            <li class="user-element"><a class="user-link" data-link="profile" href="">Личный кабинет</a></li>
            <li class="user-element"><a class="user-link" data-link="favorites" href="">Избранное</a></li>
            ${
              store.user.email === 'admin@gmail.com'
                ? '<li class="user-element"><a class="user-link" data-link="createAd" href="">Создать обьявление</a></li>'
                : ''
            }

            <button class="button-close" data-link="exit" type="button">Выход</button>
        </ul>
    </div>`;
  }

  function createListenersMenu(closebackdrop) {
    const igorButtonClose = document.querySelector('.button-close');
    igorButtonClose.addEventListener('click', closebackdrop);
    const userList = document.querySelector('.user-list');
    userList.addEventListener('click', event => {
      event.preventDefault();

      if (event.target.dataset) {
        refs.lightbox.classList.remove('is-open');
        refs.body.style.overflow = 'visible';
        refs.backdrop.style.overflow = 'visible';
        refs.backdrop.classList.remove('loader-backdrop');

        switch (event.target.dataset.link) {
          case 'profile':
            refs.mainContainer.innerHTML = '';
            renderProfile('personalProfile');
            break;
          case 'favorites':
            refs.mainContainer.innerHTML = '';
            renderProfile('favorites');
            break;
          case 'createAd':
            refs.mainContainer.innerHTML = '';
            renderProfile('createAd');
            break;
          case 'exit':
            exitUser();
            break;

          default:
            break;
        }
      }
    });
  }
}
export default renderAuthMenu;
