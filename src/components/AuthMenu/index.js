import "./AuthMenu.css"
import store from "../store"
import {modalModule} from '../modalmodule/modal'
console.log(store.user.name);

const AuthMenu = () => {

 return  `<div class="private-account">
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

const modalBTN = document.querySelector('.icon-header-auth');
modalBTN.addEventListener('click', product);



function product(){

    function createListeners(closebackdrop) {
        const myButtonClose = document.querySelector('.button-close');
        myButtonClose.addEventListener("click", closebackdrop);
    }
    modalModule(AuthMenu , createListeners);
}