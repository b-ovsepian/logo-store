import css from './header.css';
import refs from './refs';
import template from './template.hbs';
import { modalModule } from '../modalmodule/modal.js';
import renderInformation from '../information';

// const product= () => {
//   // modalModule(template, )
//   const createListeners = closeBackdrop => {
//     refs.openModal.classList.toggle('visually-hidden');
//     refs.closeModal.classList.toggle('visually-hidden');
//     closeBackdrop();
//     refs.modalBtn.addEventListener('click', closeBackdrop);
//   };
//   if (refs.openModal.classList.contains('visually-hidden')) {
//     refs.modalBtn.addEventListener('click', product);
//   }
//   modalModule(template, createListeners);
// };

// refs.modalBtn.addEventListener('click', method1);
// function method1() {
//   refs.openModal.classList.add('visually-hidden');
//   refs.closeModal.classList.toggle('visually-hidden');
//   function method2(closebackdrop) {
//     refs.modalBtn.addEventListener('click', closebackdrop)
//     refs.openModal.classList.toggle('visually-hidden');
//     refs.closeModal.classList.add('visually-hidden');
//   }
//   modalModule(template, method2)
// }

refs.modalBtn.addEventListener('click', openModal);
function openModal() {
  function addListeners(closeBackdrop) {
    // document.querySelector().addEventListener('click', closeBackdrop);
  }
  modalModule(template, addListeners);
  renderInformation();
}
