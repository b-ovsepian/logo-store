import { ValidateEmail, ValidatePassword } from './validation';
import { modalModule } from '../modalmodule/modal';
import '../authform/form.css';
// import { authRefs } from './formRefs';


function markUpRendering() {

    return `<div class="authorization">
                <h2 class="authtitle">Авторизация</h2>

                <form name="authform" class="auth-form">
                <div class="email-section">
                    <label class="authlabel" for="email"><span class="authspan">*</span>E-mail или телефон</label>
                    <input class="authinput input-email" id="email" placeholder="E-mail или телефон" name="authMail" value="" required/>            
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
                <button class="enterAccount button" name="enterAccount">Войти</button>
                <button class="registerAccount button" name="registerAccount">Регистрация</button>
                </div>
                </form>
                 <div class="icon-wrapper auth-icon-wrapper">
                  <div class="close-icon icon-auth">&#10006;</div>
                 </div>
            </div>`;
};

// // !!!change an element to open
// const modalBTN = document.querySelector('.authbtn');
// modalBTN.addEventListener('click', openForm);


// function openForm() {
//     function createListeners(closebackdrop) {
        
//         const myButton = document.querySelector('.close-icon');
//         myButton.addEventListener("click", closebackdrop);
//     }

//     modalModule(markUpRendering, createListeners);
// };

const markup=markUpRendering();

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', markup);
    
// body.innerHTML += markUpRendering();


const refs = {
    lightbox: document.querySelector('.lightbox'),
}

export const authRefs = {
    form: document.querySelector('.auth-form'),
    enterAccountBtn: document.querySelector('.enterAccount'),
    registerAccountBtn: document.querySelector('.registerAccount'),
    buttons:document.querySelector('.authbuttons')
}

console.log(authRefs.form);

// if (refs.lightbox.classList.contains('is-open')) {
    authRefs.form.addEventListener('submit', e => {
        e.preventDefault();

        let password = authRefs.form.elements.password.value;
        let email = authRefs.form.elements.email.value;
        

        function Validation() {
            if(ValidateEmail(email) &&
            ValidatePassword(password));
        }

        Validation();
        
        if (Validation) {
            getToken();
        }

        function getToken() {
            authRefs.buttons.addEventListener('click', e => {
            
                if (e.target.classList.contains('registerAccount') &&
                    (authRefs.form.elements.radio.checked === true)) 
                    
                {
                    apiServiceRegister(email, password);
                } if (e.target.classList.contains('enterAccount')) {
                    apiServiceEnter(email, password);
            
                }
            });
        }

        function apiServiceRegister(email, password) {
        
            return fetch('https://goit-store.herokuapp.com/auth/registration',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: email, password: password }),
                })
                .then(response => response.json())
                .catch(error => { console.log(error); openMessageEnt()});
        }
    
        function apiServiceEnter(email, password) {
            return fetch('https://goit-store.herokuapp.com/auth/login',
            
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: email, password: password }),
                })
                .then(response => response.json()).then((data) => {
                    console.log(data);
                    storageToken(data.user, data.user.role, data.accces_token)
                }).catch(error => { console.log(error); openMessageReg()});
        }
    
        function storageToken(userInfo, role, token) {
        
            const infoUser = JSON.stringify({ token: token, role: role, info: userInfo });
            localStorage.setItem('info', infoUser);

        }

    });
// }



function openMessageReg() {
    function messageRendering() {
        return `<div class="errorModal">
        <p class="error-icon">&#9888;</p>
        <p class="error-title">Пользователь с таким именем не найден.</p> 
        <p class="error-text">Пожалуйста, введите корректный email или пройдите регистрацию в данной форме.</p>
         <div class="icon-wrapper auth-icon-wrapper">
                  <div class="close-icon icon-auth">&#10006;</div>
                </div>
        </div>`
    }

    function createListeners(closebackdrop) {
        
        const myButton = document.querySelector('.close-icon');
        myButton.addEventListener("click", closebackdrop);
    }

    modalModule(messageRendering, createListeners);
};

function openMessageEnt() {
    function messageRenderingEnt() {
        return `<div class="errorModal">
            <p class="error-icon">&#9888;</p>
            <p class="error-title">Пользователь с таким именем не найден.</p> 
            <p class="error-text">Пожалуйста пройдите регистрацию в данной форме.</p>
            <div class="icon-wrapper auth-icon-wrapper">
                <div class="close-icon icon-auth">&#10006;</div>
            </div>
        </div>`
    }

    function createListeners(closebackdrop) {
        
        const myButton = document.querySelector('.close-icon');
        myButton.addEventListener("click", closebackdrop);
    }

    modalModule(messageRenderingEnt, createListeners);
};



