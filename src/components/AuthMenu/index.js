import "./AuthMenu.css"
import store from "../store"
import {modalModule} from '../modalmodule/modal'
// import "../authform/authform.js"
import {openForm} from "../authform/authform.js"
console.log(openForm());
console.log(store.user.name);

// const modalBTN = document.querySelector('.authbtn');
// modalBTN.addEventListener('click', openForm);
const changeA = () => {
    if (store.user.name) {
        changeClose()
    } else {
        openForm()
    }
}

const authMenu = () => {

    `<div class="private-account">
          <ul class="user-list">
           <li><h2 class="user-heading">${store.user.name?store.user.name:'Username'}</h2></li>
           <li class="user-element"><a class="user-link" href="">Личный кабинет</a></li>
           <li class="user-element"><a class="user-link" href="">Избранное</a></li>
           <li class="user-element"><a class="user-link" href="">Создать обьявление</a></li>
           <button class="button-close">Выход</button>
         </ul>
</div>`
};

// export default AuthMenu

// const modalBTN = document.querySelector('.icon-header-auth');
// modalBTN.addEventListener('click', product);

const openHuman = document.querySelector("open-human")
console.log(changeA());
openHuman.addEventListener("click", changeA)

function changeClose(){

    function createListeners(closebackdrop) {
        const myButtonClose = document.querySelector('.button-close');
        myButtonClose.addEventListener("click", closebackdrop);
    }
    modalModule(AuthMenu , createListeners);
}

// function setTokenToStore() {
//     const localToken = localStorage.getItem('user_token');
//     localToken ? (store.auth.accces_token = localToken) : '';
//   }


console.log(setTokenToStore());

if (store.user.name) {

} else {

}