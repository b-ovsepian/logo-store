import "./AuthMenu.css"
import store from "../store"
import {modalModule} from '../modalmodule/modal'
import {openForm} from "../authform/authform.js"

const iconHeaderAuth = document.querySelector('.icon-header-auth')
const isAdmin = () =>  {
    const info = JSON.parse(localStorage.getItem("info")) || {};
    return info.role === "ADMIN"
}
const isUser = () => {
    const info = JSON.parse(localStorage.getItem("info")) || {};
    return info.role === "USER";
}

function userIgor(){
    function div() {
      return checkAuto()
    }

    modalModule(div, createListeners)
}

const checkAuto =()=>{
    if (isUser()) {
        document.querySelector('modal-wrapper').innerHTML =  `<div class="private-account">
              <ul class="user-list">
               <li><h2 class="user-heading">${store.user.name?store.user.name:'Username'}</h2></li>
               <li class="user-element"><a class="user-link" href="">Личный кабинет</a></li>
               <li class="user-element"><a class="user-link" href="">Избранное</a></li>
               <button class="button-close">Выход</button>
             </ul>
        </div>`
    } else if (isAdmin()) {
        document.querySelector('modal-wrapper').innerHTML =   `<div class="private-account">
            <ul class="user-list">
                <li><h2 class="user-heading">${store.user.name?store.user.name:'Username'}</h2></li>
                <li class="user-element"><a class="user-link" href="">Личный кабинет</a></li>
                <li class="user-element"><a class="user-link" href="">Избранное</a></li>
                <li class="user-element"><a class="user-link" href="">Создать обьявление</a></li>
                <button class="button-close">Выход</button>
            </ul>
        </div>`
    }

}

// const authMenu = () => {

//     `<div class="private-account">
//           <ul class="user-list">
//            <li><h2 class="user-heading">${store.user.name?store.user.name:'Username'}</h2></li>
//            <li class="user-element"><a class="user-link" href="">Личный кабинет</a></li>
//            <li class="user-element"><a class="user-link" href="">Избранное</a></li>
//            <li class="user-element"><a class="user-link" href="">Создать обьявление</a></li>
//            <button class="button-close">Выход</button>
//          </ul>
// </div>`
// };


iconHeaderAuth.addEventListener("click",  (e) =>{
    if (isAdmin() || isUser()) {
        openAuthMenu()
    } else {
        openForm()
    }

})
function openAuthMenu() {
   modalModule(markup, createListenersMenu)
}

function markup() {

        return  `<div class="private-account">
            <ul class="user-list">
            <li><h2 class="user-heading">${store.user.name?store.user.name:'Username'}</h2></li>
            <li class="user-element"><a class="user-link" href="">Личный кабинет</a></li>
            <li class="user-element"><a class="user-link" href="">Избранное</a></li>
            ${isAdmin() ? '<li class="user-element"><a class="user-link" href="">Создать обьявление</a></li>' : ''}

            <button class="button-close">Выход</button>
        </ul>
    </div>`
    }

    function createListenersMenu(closebackdrop) {
        const igorButtonClose = document.querySelector(".button-close");
        igorButtonClose.addEventListener("click", closebackdrop);
    }




