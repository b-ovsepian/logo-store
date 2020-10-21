import style from '../newADV/style.css'
import refs from '../../refs/index.js'
import { data } from 'autoprefixer'
import template from './template.hbs'

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
 acc+=`<img src='${item}' class="createIMG" alt="image">`
 return acc
}, "")
  if (array.length > 5) {
    let plus = document.querySelector('.imageUpload')
    plus.style = "display:none";
  }
  ref.innerHTML = markup;
}


const createBase = async (element) => {
  productMass.photoProduct.push(await toDataUrl(element));
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




