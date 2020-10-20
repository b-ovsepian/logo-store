import css from './style.css';
import apiService from './apiService.js'
import template from '../../templates/product-card-templates.hbs'
import searchProducts from '../services/index.js'
import obj from '../product-card/obj.json'

let slider = document.querySelector('.product-card-slider')
let bigPhoto; //= document.querySelector('.product-card-slider-big-photo')
let sliderList; //= document.querySelector('.product-card-slider-list')
let productCart = document.querySelector('.product-card')

// renderImages(obj)

// let images = ['https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/876499d30d2/4899de12586e9aa3857a2/med_1577956238_image.jpg', 
// 'https://www.meme-arsenal.com/memes/58fb3407056df8c46cff07ced4601a4a.jpg', 
// 'https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/876499d30d2/4899de12586e9aa3857a2/med_1577956238_image.jpg', 
// 'https://www.meme-arsenal.com/memes/58fb3407056df8c46cff07ced4601a4a.jpg',
// 'https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/876499d30d2/4899de12586e9aa3857a2/med_1577956238_image.jpg', 
// 'https://www.meme-arsenal.com/memes/58fb3407056df8c46cff07ced4601a4a.jpg',]

// createModalImg(images); 

// console.log(images);

// renderApi();
export default {

    renderImages(data) {
        console.log(data.name);
        const items = template(data)
        productCart.insertAdjacentHTML('beforeend', items)

        bigPhoto = document.querySelector('.product-card-slider-big-photo')
        sliderList = document.querySelector('.product-card-slider-list')

        createModalImg(data)
    },

    createModalImg(img) {
        let bigImage = document.createElement('img')
        bigImage.setAttribute('class', 'product-cart-main-img')
        bigPhoto.append(bigImage)

        bigImage.src = img.images
        console.log(bigImage);

        sliderList.addEventListener('click', (e) => {
            bigImage.src = e.target.src
        })
        img.forEach(el => {
            for (const imageItem of el.images) {
                let li = document.createElement('li')
                li.setAttribute('class', 'product-card-slider-list')

                let img = document.createElement('img')
                img.setAttribute('class', 'product-card-slider-smallImg')
                img.src = imageItem
                li.append(img)

                sliderList.append(li)

            }
        })
    }
}
