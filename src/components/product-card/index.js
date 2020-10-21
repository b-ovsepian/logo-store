import css from './style.css';
import apiService from './apiService.js'
import template from '../../templates/product-card-templates.hbs'
import searchProducts from '../services/index.js'
import obj from '../product-card/obj.json'

// renderImages(obj)
let cont = document.querySelector('.main-container')
let main = document.querySelector('.page-main')

// renderImages(obj)

let slider = document.querySelector('.product-card-slider')
let bigPhoto; //= document.querySelector('.product-card-slider-big-photo')
let sliderList; //= document.querySelector('.product-card-slider-list')
let productCart = document.querySelector('.product-card')
let buyButton = document.querySelector('.product-card-button-buy')

// createModalImg(images); 
// console.log(images);
// renderApi();

export default {
  renderImages(data) {
    console.log(data);
    productCart.innerHTML = ''
    // console.log(data.name);
    productCart.style.paddingTop = '30px'
    productCart.style.paddingBottom = '60px'
    const items = template(data)
    productCart.insertAdjacentHTML('beforeend', items)
    productCart.style.paddingtop = '100px'
    
    bigPhoto = document.querySelector('.product-card-slider-big-photo')
    sliderList = document.querySelector('.product-card-slider-list')
    this.createModalImg(data)
  },

  createModalImg(img){
    
    img.forEach(el => {
      console.log(el.category);
      for (const imageItem of el.images) {
        let li = document.createElement('li')
        li.setAttribute('class', 'product-card-slider-item')
        let img = document.createElement('img')
        img.setAttribute('class', 'product-card-slider-smallImg')
        img.src = imageItem
        li.append(img)
        sliderList.append(li)
      }
    })
    sliderList.addEventListener('click', (e) => {
      bigImage.src = e.target.src
    })
    let bigImage = document.createElement('img')
    bigImage.setAttribute('class', 'product-cart-main-img')

    bigImage.src = img[0].images[0]
    bigPhoto.append(bigImage)

    buyButton.addEventListener('click', (e) => {
      commonRender(img)
    })
  }
}

// export default {

//     renderImages(data) {
//         // console.log(data.name);
//         const items = template(data)
//         productCart.insertAdjacentHTML('beforeend', items)

//         bigPhoto = document.querySelector('.product-card-slider-big-photo')
//         sliderList = document.querySelector('.product-card-slider-list')

//         this.createModalImg(data)
//     },

//     createModalImg(img) {
//         // console.log(img);
//         let bigImage = document.createElement('img')
//         bigImage.setAttribute('class', 'product-cart-main-img')
//         bigPhoto.append(bigImage)

//         bigImage.src = img.images
//         console.log(bigImage);

//         sliderList.addEventListener('click', (e) => {
//             bigImage.src = e.target.src
//         })
//         img.forEach(el => {
//             for (const imageItem of el.images) {
//                 let li = document.createElement('li')
//                 li.setAttribute('class', 'product-card-slider-list')

//                 let img = document.createElement('img')
//                 img.setAttribute('class', 'product-card-slider-smallImg')
//                 img.src = imageItem
//                 li.append(img)

//                 sliderList.append(li)

//             }
//         })
//     }
// }

