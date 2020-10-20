import style from '../newADV/style.css'
import refs from '../../refs/index.js'
import { data } from 'autoprefixer'

// загружаем изобрадение через форму
const fileForm = document.querySelector('.adminFormProduct')

function toDataUrl(element) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0])
  })
}

const createBase = () => {
  const element = fileForm.elements.photoProduct
  const resultIMG = document.querySelector('.createIMG')
  const newImg = document.createElement('img')
  newImg.classList.add('newImg')


  toDataUrl(element).then(data => {
    // resultIMG.src = data
    newImg.src = data
    console.log(newImg.src);
    let a = document.querySelector('.plusImage')

    a.append(newImg)
    createBase()
    return data
  })
}


const baza = {
  nameProduct: '',
  photoProduct: []
}
console.log(baza.photoProduct);

const onChange = async(e) => {
  console.log("hello");
  if (e.target.name = "photoProduct") {
    baza.photoProduct.push(await toDataUrl(e.target));
    console.log(baza);

  } else data[e.target.name] = e.target.value
}

fileForm.addEventListener('input', onChange)


// создаем карточку елементов формы создания
fileForm.addEventListener('submit', (event) => {
  event.preventDefault()
console.log(event.target);
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
  console.dir(event)

  refs.createCardContainer.append(h2,textArea,productLink,priceLink,telLink,imgHeadProduct)

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



