import style from '../newADV/style.css'
import refs from '../../refs/index.js'


// загружаем изобрадение через форму

const fileForm = document.querySelector('.adminFormProduct')

function toDataUrl(element) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0])
  })
}

const createBase = (e) => {
  e.preventDefault()
  const element = fileForm.elements.photoProduct
  const resultIMG = document.querySelector('.createIMG')
  toDataUrl(element).then(data => {
    resultIMG.src = data
  })
}




// создаем карточку елементов формы создания

fileForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const h2 = document.createElement('h2')
  const imgHeadProduct = document.createElement('img')
  const textArea = document.createElement('p')
  const productLink = document.createElement('a')
  const priceLink = document.createElement('p')
  const telLink = document.createElement('a')
  // находим каждое велью из интупа
  const nameElement = event.target.elements

  // создаем переменные значения из инпутов
  const inputNameP = nameElement.nameProduct.value
  h2.textContent = inputNameP

  const inputPhotoP = nameElement.photoProduct.value
  imgHeadProduct.src = `${inputPhotoP}`

  const textAreaP = nameElement.textareaProduct.value
  textArea.textContent = textAreaP

  const inputCategoryP = nameElement.categoryProduct.value
  productLink.textContent = inputCategoryP

  const inputPriceP = nameElement.priceProduct.value
  priceLink.textContent = inputPriceP

  const inputTelP = nameElement.telProduct.value
  telLink.textContent = inputTelP
  telLink.href = inputTelP

  refs.createCardContainer.append(h2,textArea,productLink,priceLink,telLink,imgHeadProduct)
  createBase()
})







// const fileForm = document.querySelector('.adminFormProduct')

// function toDataUrl(value) {
//   return new Promise(resolve => {
//     const reader = new FileReader()
//     reader.onloadend = () => resolve(reader.result);
//     reader.readAsDataURL(value.files[0])
//   })
// }

// const createIMG = document.querySelectorAll('.createIMG')
// const createBase = (e) => {
//   e.preventDefault()
//   const input = fileForm.elements.photoProduct
//   console.log(input.value);


//   let a = toDataUrl(input).then(data => {
//     createIMG.src = data
//     console.log(data);
//     // console.log(createIMG);
//   })
//       if (createIMG[0].dataset.createCard === 1) {
//         createIMG[0].style.display = 'block'
//         createIMG[0].src = a
//       }
// }

// fileForm.addEventListener('input', createBase)
