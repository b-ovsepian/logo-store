
import '../modalmodule/modal.css';
import { refs } from "./modalrefs";

 export const modalModule = (markup, listeners) => {
       function openBackdrop() {
        refs.lightbox.classList.add('is-open');
    };
        refs.backdrop.addEventListener('click', e => {

         if ((e.target === e.currentTarget) ||
             (e.target.classList.contains('close-icon')) ||
            (e.target.classList.contains('icon-wrapper'))) {

            closeBackdrop();
        }
    });
    function closeBackdrop() {
        refs.lightbox.classList.remove('is-open');
    };
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeBackdrop();
        }
    });
    openBackdrop();
    const modalContent = document.querySelector('.modal-wrapper');
    modalContent.innerHTML = markup();
    listeners(closeBackdrop);
}


// если вам нужно вставить модалку:
// 1) скопируйте  ф-цию product и вызовите у себя на своем элементе (в примере это modalBTN, в оригинале - это ваш элемент);
// 2) если нужно, чтобы модалка закрывалась по крестику, в главном index.html копируем код
// <!-- <div class="icon-wrapper">
// <svg class="close-icon">
//   <use href="./components/modalmodule/symbol-defs.svg#iconVector-16"></use>
// </svg>
// </div> -->
// и вставляем в свою функцию, которая рендерит разметку (в примере это функция buyGoods);


const modalBTN = document.querySelector('.modalbtn');
modalBTN.addEventListener('click', product);


function product(){
    function buyGoods() {
        // example for markup
        return `<div>hey<button class="hello">GET</button></div>`
    }
    function createListeners(closebackdrop) {
        const myButton = document.querySelector('.hello');
        myButton.addEventListener("click", closebackdrop);
    }
    modalModule(buyGoods, createListeners);
}


