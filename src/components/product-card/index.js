import css from './style.css';
import apiService from './apiService.js'
import template from '../../templates/product-card-templates.hbs'

let slider = document.querySelector('.product-card-slider')
let bigPhoto = document.querySelector('.product-card-slider-big-photo')
let sliderList = document.querySelector('.product-card-slider-list')
let productCart = document.querySelector('.product-card')
// console.log(images);
console.log(sliderList);

// let images = ['https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/876499d30d2/4899de12586e9aa3857a2/med_1577956238_image.jpg', 
// 'https://www.meme-arsenal.com/memes/58fb3407056df8c46cff07ced4601a4a.jpg', 
// 'https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/876499d30d2/4899de12586e9aa3857a2/med_1577956238_image.jpg', 
// 'https://www.meme-arsenal.com/memes/58fb3407056df8c46cff07ced4601a4a.jpg',
// 'https://coubsecure-s.akamaihd.net/get/b72/p/coub/simple/cw_timeline_pic/876499d30d2/4899de12586e9aa3857a2/med_1577956238_image.jpg', 
// 'https://www.meme-arsenal.com/memes/58fb3407056df8c46cff07ced4601a4a.jpg',]

// createModalImg(images); 

// console.log(images);

function renderApi(){
  apiService.fetchImages().then(hits => renderImages(hits));
}



// console.log(createModalImg());

function createModalImg(images){

  
  // bigImage.addEventListener('click', (e) => {
  //    bigImage.src = images[0]  
  // })

  const arr = images.hits

  console.log(arr);

  arr.map(el => {
    console.log(el);
    let li = document.createElement('li')
    li.setAttribute('class', 'product-card-slider-list')
    
    let img = document.createElement('img')
    img.setAttribute('class', 'product-card-slider-smallImg')
    img.src = el.previewURL
    
    li.append(img)

    sliderList.append(li)

    renderImages()

  })

  let bigImage = document.createElement('img')
  bigImage.setAttribute('class', 'product-cart-main-img')
  bigPhoto.append(bigImage)
  
  bigImage.src = images[0]

  
  sliderList.addEventListener('click', (e) => {
    bigImage.src = e.target.src
  })
}

function renderImages(data){
  console.log(data);
  const items = template(data)
  productCart.insertAdjacentHTML('beforeend', items)
  createModalImg(data)
}



console.log(renderApi());


// comments: 259
// downloads: 309325
// favorites: 1788
// id: 434918
// imageHeight: 1453
// imageSize: 587598
// imageWidth: 2165
// largeImageURL: "https://pixabay.com/get/52e3d14a4b5ab108f5d0846096293f78173cdbe1544c704f752d7cdc9f4fc459_1280.jpg"
// likes: 1455
// pageURL: "https://pixabay.com/photos/legs-window-car-dirt-road-relax-434918/"
// previewHeight: 100
// previewURL: "https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918_150.jpg"
// previewWidth: 150
// tags: "legs, window, car"
// type: "photo"
// user: "Greyerbaby"
// userImageURL: "https://cdn.pixabay.com/user/2014/11/14/05-39-07-629_250x250.jpg"
// user_id: 2323
// views: 694218
// webformatHeight: 429
// webformatURL: "https://pixabay.com/get/52e3d14a4b5ab10ff3d8992cc620317c163adae24e507749772873dc954cc4_640.jpg"
// webformatWidth: 640