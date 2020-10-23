import css from './style.css';
import apiService from './apiService.js'
import template from '../../templates/product-card-templates.hbs'
import searchProducts from '../services/index.js'
import obj from '../product-card/obj.json'


// renderImages(obj)
let main = document.querySelector('.page-main')
let slider = document.querySelector('.product-card-slider')
let bigPhoto; //= document.querySelector('.product-card-slider-big-photo')
let sliderList; //= document.querySelector('.product-card-slider-list')
let productCart; //= document.querySelector('.product-card')

// createModalImg(images);

// console.log(images);

// renderApi();
export default {

    renderImages(data) {
        const items = template(data)
        main.innerHTML = ''
        main.insertAdjacentHTML('beforeend', items)

        productCart = document.querySelector('.product-card')
        bigPhoto = document.querySelector('.product-card-slider-big-photo')
        sliderList = document.querySelector('.product-card-slider-list')

        this.createModalImg(data)
    },

    createModalImg(img) {
        // console.log(img);
        let bigImage = document.createElement('img')
        bigImage.setAttribute('class', 'product-cart-main-img')
        bigPhoto.append(bigImage)

        bigImage.src = img[0].images[0]
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
