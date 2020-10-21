import "./AuthMenu.css"
import store from "../store"
import {modalModule} from '../modalmodule/modal'
// import "../authform/authform.js"
import {openForm} from "../authform/authform.js"
// const modalBTN = document.querySelector('.authbtn');
// modalBTN.addEventListener('click', openForm);
const iconHeaderAuth = document.querySelector('.icon-header-auth')
function userIgor(){
    function div() {
      return checkAuto()
    }
    function createListeners(closebackdrop){
        const myButton = document.querySelector(".button-close");
        setTimeout(() => {
            myButton.addEventListener("click", closebackdrop);
        }, 1000);
    }
    modalModule(div, createListeners)
}

const checkAuto =()=>{
    if (localStorage.getItem("info").role === "USER") {
        document.querySelector('modal-wrapper').innerHTML =  `<div class="private-account">
              <ul class="user-list">
               <li><h2 class="user-heading">${store.user.name}</h2></li>
               <li class="user-element"><a class="user-link" href="">Личный кабинет</a></li>
               <li class="user-element"><a class="user-link" href="">Избранное</a></li>
               <button class="button-close">Выход</button>
             </ul>
    </div>`
    } else if (localStorage.getItem("info").role === "ADMIN") {
        document.querySelector('modal-wrapper').innerHTML =   `<div class="private-account">
    <ul class="user-list">
     <li><h2 class="user-heading">${store.user.name}</h2></li>
     <li class="user-element"><a class="user-link" href="">Личный кабинет</a></li>
     <li class="user-element"><a class="user-link" href="">Избранное</a></li>
     <li class="user-element"><a class="user-link" href="">Создать обьявление</a></li>
     <button class="button-close">Выход</button>
   </ul>
</div>`
    }

    }

console.log(checkAuto);
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

// export default AuthMenu

// const modalBTN = document.querySelector('.icon-header-auth');
// modalBTN.addEventListener('click', product);

const openHuman = document.querySelector('.icon-header-auth')
// console.log(checkAuto());

iconHeaderAuth.addEventListener("click",  (e) =>{
    console.dir(e.target);
    // checkAuto()
    userIgor()
})

// function changeClose(){

//     function createListeners(closebackdrop) {
//         const myButtonClose = document.querySelector('.button-close');
//         myButtonClose.addEventListener("click", closebackdrop);
//     }
//     modalModule(AuthMenu , createListeners);
// }

// function setTokenToStore() {
//     const localToken = localStorage.getItem('user_token');
//     localToken ? (store.auth.accces_token = localToken) : '';
//   }

