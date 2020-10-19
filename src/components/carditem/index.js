import css from "./style.css"
import refs from "../../refs/index.js"
import templateCardItem from "./templateCardItem.hbs"
import services from "../services/index.js"
import store from "../store/index.js"


// поиск элемента куда нужно встроить "ul"
const divMain = refs.main.querySelector(".container")

// авторизация на сайте
services.loginUser("mango12345@gmail.com", "qwerty12345");

setTimeout(() => {
    services.getAllProducts().then(data => {
        cardItem(data, divMain)
        // console.log(data);
    })
}, 1000);


// при вызове функции вторым параметром нужно передать 
// элемент в который нужно встроить список с карточками
const cardItem = (data, where) => {
    // создание "ul", для встройки "li" и присвоение классов
    const cardList = document.createElement("ul")
    cardList.classList.add("card-list")
    cardList.classList.add("list")
    //добавлят "ul" в указаный в параметрах элемент
    where.append(cardList)
    const item = templateCardItem(data)
    // место куда нужно вставить "li"
    cardList.innerHTML = item
    //слушатель на иконку для смены иконки
    // и записи на бек в массив favorit
    cardList.addEventListener("click", (e) => {
        let id = e.target.dataset.id
        // console.log(id);
        // let idCard = e.target.item.id
        // console.log(idCard);
        if (e.target.classList.contains("icon-box-favorit")) {
            e.target.classList.toggle("icon-box-favorit-full")
        }
        if (e.target.classList.contains("icon-box-favorit-full")) {
            // взяли id объекта
            let element = mapArray(data, id)
            services.addFavoriteProduct(element)
        }
        if (!e.target.classList.contains("icon-box-favorit-full") && e.target.nodeName === "SPAN") {
            let element = mapArray(data, id)
            services.removeFavoriteProduct(element._id)
        }
    }
    )
}
// функция поиска выбранного элемента по сердечку
function mapArray(ar, id) {
    return ar.find((elem) => elem._id === id)
}