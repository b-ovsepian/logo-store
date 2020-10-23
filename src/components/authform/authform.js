import { ValidateEmail, ValidatePassword } from './validation';
import { modalModule } from '../modalmodule/modal';
import '../authform/form.css';
import store from '../store';
import Axios from 'axios';
import searchObj from '../services/index';
import { data } from 'autoprefixer';

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
                    <div class="passw-label-wrapper">
                    <label class="authlabel" for="password"><span class="authspan">*</span>Пароль</label>
                    <span class="passw-valid-text">Пароль должен включать от 6 до 20 символов: 1й заглавной буквы, не менее 5 цифр и мин 3х маленьких букв</span>
                    </div>
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

function openForm() {
  function createListeners(closebackdrop) {
    const myButton = document.querySelector('.close-icon');
    myButton.addEventListener('click', closebackdrop);

    const authRefs = {
      form: document.querySelector('.auth-form'),
      enterAccountBtn: document.querySelector('.enterAccount'),
      registerAccountBtn: document.querySelector('.registerAccount'),
      buttons: document.querySelector('.authbuttons'),
      spanText: document.querySelector('.passw-valid-text'),
    };

    const user = {
      email: '',
      password: '',
    };

    authRefs.form.elements.password.addEventListener('focus', () => {
      authRefs.spanText.classList.add('is-open');
    });

    authRefs.form.elements.password.addEventListener('blur', () => {
      authRefs.spanText.classList.remove('is-open');
    });

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
      if (e.target.classList.contains('registerAccount')) {
        // &&(authRefs.form.elements.radio.checked===true))
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
        const url = 'https://back24.herokuapp.com/auth/registration';
        let response = await Axios.post(url, obj)
          .then(info => {
            console.log(info);
            successRegisterMessage();
          })
          .then(data => {
            authRefs.form.elements.radio.checked = true;

            setTimeout(() => {
              apiServiceEnter(user);
            });
          }, 2000);

        return response;
      } catch (error) {
        openErrorMessage();
        throw error;
      }
    };

    const apiServiceEnter = async obj => {
      const url = 'https://back24.herokuapp.com/auth/login';

      try {
        const response = await Axios.post(url, obj).then(({ data }) => {
          store.auth.accces_token = data.accces_token;
          store.user = data.user;
          if (authRefs.form.elements.radio.checked === true) {
            storageToken(data.user, data.accces_token);
          }

          setTimeout(() => {
            successEnterMessage();
          }, 1000);
          return response;
        });
      } catch (error) {
        console.log(error);
        openErrorMessage();
        throw error;
      }
    };

    function storageToken(userInfo, token) {
      const infoUser = JSON.stringify({ token: token, info: userInfo });
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
