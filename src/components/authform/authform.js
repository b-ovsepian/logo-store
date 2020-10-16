
function markUpRendering() {

    return `<div class="authorization">
                <h2>Авторизация</h2>

                <form name="authform" class="auth-form">
                <div class="email-section">
                    <label for="email"><span>*</span>E-mail или телефон</label>
                    <input id="email" placeholder="E-mail или телефон" name="auth-email" value="" required/>
                </div>
                <div class="password-section">
                    <label for="password"><span>*</span>Пароль</label>
                    <input id="password" placeholder="Пароль" name="password" value="" required/>
                </div>
                <label for="checkbox"></label>
                <input id="checkbox" type="radio" name="radio"/>Запомнить меня

                <div class="authbuttons">
                <button class="enterAccount button primary" name="enterAccount">Войти</button>
                <button class="registerAccount button primary" name="registerAccount">Регистрация</button>
                </div>
                </form> 
            </div>`;
};

const body = document.querySelector('body');
    
body.innerHTML = markUpRendering();

const authRefs = {
    form: document.querySelector('.auth-form'),
    enterAccountBtn: document.querySelector('.enterAccount'),
    registerAccountBtn: document.querySelector('.registerAccount'),
    buttons:document.querySelector('.authbuttons')
}

let password;
let email;
     
authRefs.form.addEventListener('submit', e => {
    e.preventDefault();

    password = authRefs.form.elements.password.value;
    email = authRefs.form.elements.email.value;

    authRefs.buttons.addEventListener('click', e => { 
        if (e.target.classList.contains('registerAccount') &&
            (authRefs.form.elements.radio.checked===true)){
           apiServiceRegister(email, password); 
        } if (e.target.classList.contains('enterAccount')) {
             apiServiceEnter(email, password);
            
        }
    });
    
    function apiServiceRegister(email, password) {
        
        return fetch('https://goit-store.herokuapp.com/auth/registration',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, password: password }),
            })
            .then(response => response.json())
            .catch(error => console.log(error));
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
               });      
    }
    
    function storageToken(userInfo, role, token) {
        
        const infoUser = JSON.stringify({ token: token, role:role, info:userInfo });
        localStorage.setItem('info', infoUser);

    }

});


