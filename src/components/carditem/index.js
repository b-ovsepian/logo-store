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

    // const favoritIcon = document.querySelector(".favorit-icon")
    // console.log(favoritIcon);


    // favoritIcon.addEventListener("click", () => {
    //     const iconHeard = favoritIcon.querySelector(".icon-heard")
    //     const iconHeardFull = favoritIcon.querySelector(".icon-heard-full")
    //     // console.log(iconHeard);
    //     // console.log(iconHeardFull);
    //     if (iconHeard.style.display == "block") {
    //         iconHeard.style.display = "none"
    //         iconHeardFull.style.display = "block"
    //     } else {
    //         iconHeard.style.display = "block"
    //         iconHeardFull.style.display = "none"
    //     }
    // })
}
