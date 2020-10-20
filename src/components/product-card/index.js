import css from './style.css';
import apiService from './apiService.js'
import template from '../../templates/product-card-templates.hbs'
import searchProducts from '../services/index.js'

let slider = document.querySelector('.product-card-slider')
let bigPhoto; //= document.querySelector('.product-card-slider-big-photo')
let sliderList; //= document.querySelector('.product-card-slider-list')
let productCart = document.querySelector('.product-card')

// let images = ['https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/876499d30d2/4899de12586e9aa3857a2/med_1577956238_image.jpg', 
// 'https://www.meme-arsenal.com/memes/58fb3407056df8c46cff07ced4601a4a.jpg', 
// 'https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/876499d30d2/4899de12586e9aa3857a2/med_1577956238_image.jpg', 
// 'https://www.meme-arsenal.com/memes/58fb3407056df8c46cff07ced4601a4a.jpg',
// 'https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/876499d30d2/4899de12586e9aa3857a2/med_1577956238_image.jpg', 
// 'https://www.meme-arsenal.com/memes/58fb3407056df8c46cff07ced4601a4a.jpg',]

// createModalImg(images); 

// console.log(images);

// renderApi();

// function renderApi() {
//     apiService.fetchImages().then(hits => renderImages(hits));
// }


export default {

    renderImages(data) {
        const items = template(data)
        productCart.insertAdjacentHTML('beforeend', items)

        bigPhoto = document.querySelector('.product-card-slider-big-photo')
        sliderList = document.querySelector('.product-card-slider-list')

        createModalImg(data)
    },


    createModalImg(images) {
        console.log(images);
        let bigImage = document.createElement('img')
        bigImage.setAttribute('class', 'product-cart-main-img')
        bigPhoto.append(bigImage)

        bigImage.src = images.hits[0].largeImageURL
        console.log(bigImage);


        sliderList.addEventListener('click', (e) => {
            bigImage.src = e.target.src
        })


        const arr = images.hits

        arr.map(el => {
            let li = document.createElement('li')
            li.setAttribute('class', 'product-card-slider-list')

            let img = document.createElement('img')
            img.setAttribute('class', 'product-card-slider-smallImg')
            img.src = el.largeImageURL

            li.append(img)

            sliderList.append(li)

        })
    }
}

