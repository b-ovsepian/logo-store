import css from "./style.css"
import refs from "../../refs/index.js"
import templateCardItem from "./templateCardItem.hbs"
import services from "../services/index.js"


services.loginUser("mango12345@gmail.com", "qwerty12345");

setTimeout(() => {
    services.getAllProducts().then(data => {
        cardItem(data)
        console.log(data);
    })
}, 2000);

// const renderItem = () => {
//     const url = `https://goit-store.herokuapp.com/products?search=&category=ref`
//     return fetch(url)
//         .then(data => data.json())
//         .then((data) => {
//             cardItem(data)
//             console.log(data)
//         })
// }
// renderItem()


const cardItem = (data) => {
    const item = templateCardItem(data)
    refs.cardList.innerHTML = item
    let favoritIcon = document.querySelectorAll(".icon-box-favorit")
    console.log(favoritIcon);
    // favoritIcon.addEventListener("click", () => {
    //     favoritIcon.classList.toggle("icon-box-favorit-full")
    // })

}

// favoritIcon.map(favoritIcon => {
//     favoritIcon.addEventListener("click", () => {
//         favoritIcon.classList.toggle("icon-box-favorit-full")
//     })

// })


