import { ValidateEmail, ValidatePassword } from './validation';
import { modalModule } from '../modalmodule/modal';
import '../authform/form.css';
import store from '../store';
import Axios from 'axios';
import searchObj from '../services/index';

function markUpRendering() {
  return `<div class="authorization">
                <h2 class="authtitle">Авторизация</h2>
                <form name="authform" class="auth-form">
                <div class="email-section">
                    <label class="authlabel" for="email"><span class="authspan">*</span>E-mail или телефон</label>
                    <input class="authinput input-email" id="email" placeholder="E-mail или телефон" name="email" value="" autocomplete="off" required/>
                    <p class="email-hint">Пожалуйста, введите корректный email</p>
                    </div>
                <div class="password-section">
                    <label class="authlabel" for="password"><span class="authspan">*</span>Пароль</label>
                    <input class="authinput input-password" id="password" placeholder="Пароль" name="password" value="" type="password" required/>
                    <p class="password-hint">Пожалуйста, введите корректный пароль</p>
                    </div>
                <div class="radiobutton">
                    <label for="checkbox" class="authradio"></label>
                    <input id="checkbox" type="radio" name="radio" class="checkbutton"/>Запомнить меня
                    </div>
                <div class="authbuttons">
                <button class="enterAccount button" name="enterAccount" disabled>Войти</button>
                <button class="registerAccount button" name="registerAccount" disabled>Регистрация</button>
                </div>
                </form>
                 <div class="icon-wrapper auth-icon-wrapper">
                  <div class="close-icon icon-auth">&#10006;</button>
                 </div>
            </div>`;
}

const modalBTN = document.querySelector('.authbtn');
modalBTN.addEventListener('click', openForm);

export function openForm() {
  function createListeners(closebackdrop) {
    const myButton = document.querySelector('.close-icon');
    myButton.addEventListener('click', closebackdrop);

    const authRefs = {
      form: document.querySelector('.auth-form'),
      enterAccountBtn: document.querySelector('.enterAccount'),
      registerAccountBtn: document.querySelector('.registerAccount'),
      buttons: document.querySelector('.authbuttons'),
    };

    const user = {
      email: '',
      password: '',
    };

    // validate inputs
    authRefs.form.addEventListener('input', event => {
      if (event.target.name === 'email' || event.target.name === 'password') {
        user[event.target.name] = event.target.value;
        if (event.target.name === 'email') {
          ValidateEmail(event.target.value);
        }
        if (event.target.name === 'password') {
          ValidatePassword(event.target.value);
        }

        if (ValidateEmail(user.email) && ValidatePassword(user.password)) {
          console.log(user.email);
          console.log(user.password);
          authRefs.enterAccountBtn.disabled = false;
          authRefs.registerAccountBtn.disabled = false;
        }
      }
    });

    authRefs.buttons.addEventListener('click', e => {
      if (
        e.target.classList.contains('registerAccount') &&
        authRefs.form.elements.radio.checked === true
      ) {
        console.log(user);
        apiServiceRegister(user);
      }
      if (e.target.classList.contains('enterAccount')) {
        console.log(user);
        apiServiceEnter(user);
      }
    });

    const apiServiceRegister = async obj => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        };
        const url = 'https://back24.herokuapp.com/auth/registration';
        const response = await fetch(url, options);
        successRegisterMessage();
        return response;
      } catch (error) {
        openErrorMessage();
        throw error;
      }
    };

    function apiServiceEnter(obj) {
      return fetch(
        'https://back24.herokuapp.com/auth/login',

        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        },
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
          store.auth.accces_token = data.accces_token;
          store.user = data.user;
          storageToken(data.user, data.user.role, data.accces_token);
          successEnterMessage();
        })
        .catch(error => {
          console.log(error);
          openErrorMessage();
        });
    }

    function storageToken(userInfo, role, token) {
      const infoUser = JSON.stringify({
        token: token,
        role: role,
        info: userInfo,
      });
      localStorage.setItem('info', infoUser);
    }

    authRefs.form.addEventListener('submit', e => {
      e.preventDefault();
    });
  }

  modalModule(markUpRendering, createListeners);
}

function successEnterMessage() {
  function openEntMessage() {
    return `<div class="modal-form">
        <p class="modal-form-title">Вы успешно авторизированы</p>
     <div class="icon-wrapper auth-icon-wrapper icon-error">
              <div class="close-icon icon-auth">&#10006;</div>
            </div>
    </div>`;
  }

  function createListeners(closebackdrop) {
    const myButton = document.querySelector('.close-icon');
    myButton.addEventListener('click', closebackdrop);
  }

  modalModule(openEntMessage, createListeners);
}

function successRegisterMessage() {
  function messageRenderingReg() {
    return `<div class="modal-form">
    <p class="modal-form-title">Вы успешно зарегистрированы</p>
     <div class="icon-wrapper auth-icon-wrapper icon-error">
              <div class="close-icon icon-auth">&#10006;</div>
            </div>
    </div>`;
  }

  function createListeners(closebackdrop) {
    const myButton = document.querySelector('.close-icon');
    myButton.addEventListener('click', closebackdrop);
  }

  modalModule(messageRenderingReg, createListeners);
}

function openErrorMessage() {
  function messageRenderingEnt() {
    return `<div class="modal-form error-form">
        <p class="modal-form-title error-title">Пользователь с таким именем не найден</p>
        <p class="modal-form-text error-text">Пожалуйста, введите корректный email/ пароль или пройдите регистрацию в данной форме.</p>
         <div class="icon-wrapper auth-icon-wrapper icon-error">
                  <div class="close-icon icon-auth">&#10006;</div>
                </div>
        </div>`;
  }

  function createListeners(closebackdrop) {
    const myButton = document.querySelector('.close-icon');
    myButton.addEventListener('click', closebackdrop);
  }

  modalModule(messageRenderingEnt, createListeners);
}
