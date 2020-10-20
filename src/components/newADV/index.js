import style from '../newADV/style.css'
import refs from '../../refs/index.js'
import { data } from 'autoprefixer'

const fileForm = document.querySelector('.adminFormProduct')

function toDataUrl(element) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0])
  })
}


const newImg = document.createElement('img')
const createBase = () => {
  const element = fileForm.elements.photoProduct
  const resultIMG = document.querySelector('.createIMG')
  newImg.classList.add('newImg')

  toDataUrl(element).then(data => {
    resultIMG.src = data
    newImg.src = data
    let a = document.querySelector('.plusImage')
    a.append(newImg)
    return data
  })
}

let productMass = {
  nameProduct: '',
  photoProduct: [],
  textareaProduct: '',
  categoryProduct: '',
  priceProduct: '',
  telProduct: '',
}

const handleChange = async(e) => {
  if (productMass[e.target.name] !== "photoProduct") {
    productMass[e.target.name]= e.target.value
    console.log(productMass);
  }
  if (productMass[e.target.name]  === "photoProduct") {
    productMass.photoProduct.push(await toDataUrl(e.target));
  }
}

fileForm.addEventListener('input', (e) => {
  e.preventDefault()
  handleChange(e)
   createBase()
})
console.log(productMass);












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


