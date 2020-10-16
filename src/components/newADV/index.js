import style from '../newADV/style.css'
import refs from '../../refs/index.js'


// refs.formAdmin.addEventListener('submit', (event) => {
//   event.preventDefault()
//   event.currentTarget.elements.value
//   console.dir(event.currentTarget);
// })

const fileForm = document.querySelector('.adminFormProduct')

function toDataUrl(value) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(value.files[0])
  })
}

const createIMG = document.querySelectorAll('.createIMG')
const createBase = (e) => {
  e.preventDefault()
  const input = fileForm.elements.photoProduct
  console.log(input.value);


  let a = toDataUrl(input).then(data => {
    createIMG.src = data
    console.log(data);
    // console.log(createIMG);
  })
      if (createIMG[0].dataset.createCard === 1) {
        createIMG[0].style.display = 'block'
        createIMG[0].src = a
      }
}

fileForm.addEventListener('change', createBase)
