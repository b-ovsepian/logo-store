import style from '../newADV/style.css'
import refs from '../../refs/index.js'
import { data } from 'autoprefixer'
import template from './template.hbs'


// const fileForm = document.querySelector('.adminFormProduct')

// let productMass = {
//   nameProduct: '',
//   photoProduct: [],
//   textareaProduct: '',
//   categoryProduct: '',
//   priceProduct: '',
//   telProduct: '',
// }

// function toDataUrl(element) {
//   return new Promise(resolve => {
//     const reader = new FileReader()
//     reader.onloadend = () => resolve(reader.result);
//     reader.readAsDataURL(element.files[0])
//   })
// }

// const newImg = document.createElement('img')
// const createBase = () => {
//   const element = fileForm.elements.photoProduct
//   console.log(element);
//   const resultIMG = document.querySelector('.createIMG')
//   newImg.classList.add('newImg')

//   toDataUrl(element).then(data => {

//     resultIMG.src = data
//     newImg.src = data
//     let uploadImg = document.querySelector('.plusImage')
//     uploadImg.append(newImg)
//   })
// }

// let a;
// let b = []
// b.push(a)

// const handleChange = async(e) => {
//   if (productMass[e.target.name] !== "photoProduct") {
//     productMass[e.target.name]= e.target.value
//     console.log(productMass);
//   }
//   if (productMass[e.target.name] === "photoProduct") {
//      a = await toDataUrl(e.target)
//     productMass.photoProduct.push(a);
//   }
// }

// fileForm.addEventListener('input', (e) => {
//   e.preventDefault()
//   handleChange(e)
//   createBase()
// })
// console.log(productMass);












// fileForm.addEventListener('input', onChange)

// создаем карточку елементов формы создания
// fileForm.addEventListener('submit', (event) => {
//   event.preventDefault()
//   console.log(event.target);
//   const h2 = document.createElement('h2')
//   const imgHeadProduct = document.createElement('img')
//   const textArea = document.createElement('p')
//   const productLink = document.createElement('a')
//   const priceLink = document.createElement('p')
//   const telLink = document.createElement('a')
//   // находим каждое велью из интупа
//   const nameElement = event.target.elements
//   // создаем переменные значения из инпутов

//   const inputNameP = nameElement.nameProduct.value
//   h2.textContent = inputNameP

//   const inputPhotoP = nameElement.photoProduct.value
//   imgHeadProduct.src = `${inputPhotoP}`

//   const textAreaP = nameElement.textareaProduct.value
//   textArea.textContent = textAreaP

//   const inputCategoryP = nameElement.categoryProduct.value
//   productLink.textContent = inputCategoryP

//   const inputPriceP = nameElement.priceProduct.value
//   priceLink.textContent = inputPriceP

//   const inputTelP = nameElement.telProduct.value
//   telLink.textContent = inputTelP
//   telLink.href = inputTelP

//   refs.createCardContainer.append(h2, textArea, productLink, priceLink, telLink, imgHeadProduct)

// })

// // !!!!!!!!!!!!!!!!!
const fileForm = document.querySelector('.adminFormProduct')

let productMass = {
  nameProduct: '',
  photoProduct: [],
  textareaProduct: '',
  categoryProduct: '',
  priceProduct: '',
  telProduct: '',
}

function toDataUrl(element) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0])
  })
}
function getMarkup (array){
  const ref = document.querySelector('.innerImages')
const markup = array.reduce((acc, item) => {
 acc+=`<img src='${item}' class="createIMG" alt="image" width="200" height="200">`
 return acc
}, "")
  console.log(markup);
  ref.innerHTML = markup;
}


const createBase = async (element) => {
  productMass.photoProduct.push(await toDataUrl(element));
  console.log(productMass.photoProduct);
  getMarkup(productMass.photoProduct)
}


const handleChange = async (e) => {
  const name = e.target.name;
  const value = e.target.value;
  if (name  === "photoProduct") {
    createBase(e.target)
  } else productMass[name]= value
}

fileForm.addEventListener('input', (e) => {
  e.preventDefault()
  handleChange(e)

})
console.log(productMass);




