import "./AuthMenu.css"
import store from "../store"
console.log(store.user.name);

const AuthMenu = () => {
  const container = document.querySelector(".authMenu")
  const markup = () => `
  <ul>
           <li><h2>${store.user.name?store.user.name:'Username'}</h2></li>
           <li><a href="">Личный кабинет</a></li>
           <li><a href="">Избранное</a></li>
           <li><a href="">Создать обьявление</a></li>
           <button>Выход</button>
         </ul>`
         container.innerHTML = markup()
}
export default AuthMenu